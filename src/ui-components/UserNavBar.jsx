/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Divider, Flex, Image } from "@aws-amplify/ui-react";
export default function UserNavBar(props) {
  const {
    logo,
    profilePicture,
    homeClickHandler,
    studioClickHandler,
    logoutClickHandler,
    isStudioLoading = false,
    modelsClickHandler,
    overrides,
    ...rest
  } = props;
  const githubButtonOnClick = useNavigateAction({
    type: "url",
    url: "https://github.com/Servian-NZ-MLOPS/intern-datasci-project-22",
  });
  const confluenceOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "https://servian.atlassian.net/wiki/spaces/NZAIML/pages/111618785317/NZ+ai+consulting+practice+internships",
  });
  return (
    <Flex
      gap="779px"
      direction="row"
      width="1440px"
      height="200px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="20px 20px 20px 20px"
      backgroundColor="rgba(250,250,250,1)"
      {...getOverrideProps(overrides, "UserNavBar")}
      {...rest}
    >
      <Flex
        gap="40px"
        direction="row"
        width="445.33px"
        height="152px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Left Frame")}
      >
        <Flex
          gap="2px"
          direction="row"
          width="445.33px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          children={logo}
          {...getOverrideProps(overrides, "Logo")}
        ></Flex>
        <Divider
          height="unset"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="vertical"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Button
          shrink="0"
          size="large"
          isDisabled={false}
          variation="link"
          children="Home"
          onClick={homeClickHandler}
          {...getOverrideProps(overrides, "HomeButton")}
        ></Button>
        <Button
          shrink="0"
          size="large"
          isDisabled={false}
          variation="link"
          isLoading={isStudioLoading}
          children="Studio"
          onClick={studioClickHandler}
          {...getOverrideProps(overrides, "StudioButton")}
        ></Button>
        <Button
          shrink="0"
          size="large"
          isDisabled={false}
          variation="link"
          children="Models"
          onClick={modelsClickHandler}
          {...getOverrideProps(overrides, "ModelsButton")}
        ></Button>
        <Button
          shrink="0"
          size="large"
          isDisabled={false}
          variation="link"
          children="Github"
          onClick={() => {
            githubButtonOnClick();
          }}
          {...getOverrideProps(overrides, "GithubButton")}
        ></Button>
        <Button
          shrink="0"
          size="large"
          isDisabled={false}
          variation="link"
          children="Confluence"
          onClick={() => {
            confluenceOnClick();
          }}
          {...getOverrideProps(overrides, "Confluence")}
        ></Button>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="152px"
        height="152px"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Right Frame")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="1px 0px 1px 0px"
          backgroundColor="rgba(255,255,255,0)"
          {...getOverrideProps(overrides, "Frame 1")}
        >
          <Image
            width="100px"
            height="100px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            border="1px SOLID rgba(0,0,0,1)"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={profilePicture}
            {...getOverrideProps(overrides, "profile")}
          ></Image>
          <Button
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Logout"
            onClick={logoutClickHandler}
            {...getOverrideProps(overrides, "LogoutButton")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
