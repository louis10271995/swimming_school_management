import React from 'react';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import selectors from 'src/modules/auth/authSelectors';
import MDButton from 'src/mui/components/MDButton';
import { Card } from '@mui/material';
import { BrandLogo } from 'src/assets/resources';
import MDBox from 'src/mui/components/MDBox';
import BasicLayout from 'src/mui/shared/Layouts/BasicLayout';
import MDTypography from 'src/mui/components/MDTypography';
import { useSelector } from 'react-redux';

const Error500Page = () => {
  const { sidenavColor } = selectMuiSettings();
  const backgroundImageUrl = useSelector(
    selectors.selectBackgroundImageUrl,
  );
  return (
    <>
      <BasicLayout
        image={backgroundImageUrl || '/images/500.svg'}
      >
        <Card>
          <MDBox
            variant="gradient"
            bgColor={sidenavColor}
            borderRadius="lg"
            coloredShadow={sidenavColor}
            mx={1.6}
            mt={-2.4}
            p={1.6}
            mb={0.8}
            textAlign="center"
          >
            <MDBox
              display="flex"
              justifyContent="center"
              py={1.6}
            >
              <BrandLogo width="80%" />
            </MDBox>
          </MDBox>
          <MDBox pt={3.2} pb={3.2} px={2.4}>
            <MDTypography variant="h3" textAlign="center">
              500
            </MDTypography>
            <MDTypography
              variant="h6"
              textAlign="center"
              my={2.4}
            >
              {i18n('errors.500')}
            </MDTypography>
            <MDButton
              component={Link}
              to="/admin"
              variant="gradient"
              color={sidenavColor}
              type="button"
              fullWidth
            >
              {i18n('errors.backToHome')}
            </MDButton>
          </MDBox>
        </Card>
      </BasicLayout>
    </>
  );
};

export default Error500Page;
