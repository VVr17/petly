import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import { validationSchema } from './validation';
import {
  useUpdateUserMutation,
  useGetCurrentUserQuery,
} from 'redux/api/userApi';
import Plus from 'assets/images/desktop/plus.svg';
import Loader from 'components/Loader';
import {
  ImageBox,
  LoadImgInput,
  LoadImgPlus,
  ImagePreview,
  LoadImageCont,
  LoadImgLabel,
  Camera,
} from '../UserDataItem.styled';

const UserPhoto = () => {
  const [fileDataURL, setFileDataURL] = useState(null);
  const [file, setFile] = useState(null);
  const { data, isFetching } = useGetCurrentUserQuery();
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const { formatMessage } = useIntl();

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      const data = new FormData();
      data.append('userImage', file);

      fileReader = new FileReader();
      fileReader.onload = e => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };

      fileReader.readAsDataURL(file);

      const uploadPhoto = async () => {
        await updateUser(data);
        toast.info(formatMessage({ id: 'toastPhotoUpdated' }));
      };
      uploadPhoto();
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  const handleSubmit = values => {
    // handle submit
  };

  const initialValues = {
    userImage: data?.photoURL || '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form>
          {
            <ImageBox>
              <LoadImgLabel htmlFor="upload">
                <Camera />
                {formatMessage({ id: 'editPhoto' })}
              </LoadImgLabel>
              <LoadImgInput
                id="upload"
                selected={values}
                name="userImage"
                type="file"
                accept="image/*"
                onChange={e => {
                  setFile(e.currentTarget.files[0]);
                  setFieldValue('userImage', e.currentTarget.files[0]);
                }}
              />
              {fileDataURL ? (
                <LoadImageCont>
                  <ImagePreview src={fileDataURL} alt="Preview" />
                </LoadImageCont>
              ) : (
                <>
                  {!isFetching && data && data?.photoURL ? (
                    <LoadImageCont>
                      <ImagePreview src={data?.photoURL} alt="Preview" />
                    </LoadImageCont>
                  ) : (
                    <>
                      <label htmlFor="upload">
                        <LoadImageCont>
                          <LoadImgPlus
                            src={Plus}
                            alt="upload"
                            width="47px"
                            height="47px"
                          />
                        </LoadImageCont>
                      </label>
                    </>
                  )}
                </>
              )}
            </ImageBox>
          }
          {isLoading && <Loader />}
        </Form>
      )}
    </Formik>
  );
};

export default UserPhoto;
