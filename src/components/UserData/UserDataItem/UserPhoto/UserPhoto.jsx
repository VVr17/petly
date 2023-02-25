import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { HiCamera } from 'react-icons/hi2';
import {
  iconStyle,
  ImageBox,
  LoadImgInput,
  LoadImgPlus,
  UploadField,
  ImagePreview,
  LoadImageCont,
  LoadImgLabel,
} from './UserPhoto.styled';
import Plus from '../../../../assets/images/desktop/plus.svg';
import {
  useUpdateUserMutation,
  useGetCurrentUserQuery,
} from 'redux/api/userApi';
import Loader from 'components/Loader';
import { validationSchema } from './validation';
// import { initialValues } from 'components/RegisterForm/Validation';
import UserUploadImg from 'components/UserUploadImg/UserUploadImg';
import { Button } from '../../UserData.styled';

const UserPhoto = () => {
  const [fileDataURL, setFileDataURL] = useState(null);
  const [file, setFile] = useState(null);
  const { data } = useGetCurrentUserQuery();
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  // console.log(data);

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
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
  const handleChange = e => {
    setFile(e.currentTarget.files[0]);
    setFieldValue('userImage', e.currentTarget.files[0]);
  }

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

{/* <UserUploadImg handleChange={handleChange} fileDataURL={fileDataURL} >
<Button type='button'>Edit photo
<HiCamera style={iconStyle} /></Button>  
</UserUploadImg> */}

          {
            <ImageBox>
            <LoadImgLabel htmlFor="upload">
              <HiCamera style={iconStyle} />
              Edit photo
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
                {data && data?.photoURL ? (
                  <LoadImageCont>
                    <ImagePreview src={data?.photoURL} alt="Preview" />
                  </LoadImageCont>
                ) : (
                  <>
                    <LoadImageCont>
                      <LoadImgPlus
                        src={Plus}
                        alt="upload"
                        width="47px"
                        height="47px"
                      />
                    </LoadImageCont>
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