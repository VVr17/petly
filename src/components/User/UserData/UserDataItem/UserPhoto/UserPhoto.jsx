import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { validationSchema } from './validation';
import {
  ImageBox,
  LoadImgInput,
  LoadImgPlus,
  ImagePreview,
  LoadImageCont,
  LoadImgLabel,
  Camera,
} from '../UserDataItem.styled';
import {
  useUpdateUserMutation,
  useGetCurrentUserQuery,
} from 'redux/api/userApi';
import Plus from 'assets/images/desktop/plus.svg';
import Loader from 'components/Loader';

const UserPhoto = () => {
  const [fileDataURL, setFileDataURL] = useState(null);
  const [file, setFile] = useState(null);
  const { data } = useGetCurrentUserQuery();
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      console.log('file inside user', file);
      const data = new FormData();
      data.append('userImage', file);
      updateUser(data);

      fileReader = new FileReader();
      fileReader.onload = e => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  const handleSubmit = values => {
    console.log(values);
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
                Edit photo
              </LoadImgLabel>
              <LoadImgInput
                id="upload"
                selected={values}
                name="userImage"
                type="file"
                accept="image/*"
                onChange={e => {
                  console.log('inside user handle change');
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
                  {data && data?.photoURL ? (
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
