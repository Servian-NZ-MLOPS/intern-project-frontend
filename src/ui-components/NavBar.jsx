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
import { Divider, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const {
    logo,
    profilePicture,
    homeClickHandler,
    studioClickHandler,
    overrides,
    ...rest
  } = props;
  const githubOnClick = useNavigateAction({
    type: "url",
    url: "https://github.com/Servian-NZ-MLOPS/intern-datasci-project-22",
  });
  const confluenceOnClick = useNavigateAction({
    type: "url",
    url: "https://servian.atlassian.net/wiki/spaces/NZAIML/pages/111618785317/NZ+ai+consulting+practice+internships",
  });
  const jiraOnClick = useNavigateAction({
    type: "url",
    url: "https://servian.atlassian.net/jira/software/c/projects/NZS/boards/138/backlog?issueLimit=100",
  });
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1440px"
      height="200px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBar")}
      {...rest}
    >
      <Flex
        gap="40px"
        direction="row"
        width="445.33px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
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
          {...getOverrideProps(overrides, "Logo")}
        >
          <Image
            width="unset"
            height="unset"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={logo}
            {...getOverrideProps(overrides, "logo")}
          ></Image>
        </Flex>
        <Divider
          height="unset"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="vertical"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Home"
          onClick={homeClickHandler}
          {...getOverrideProps(overrides, "Home")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Studio"
          onClick={studioClickHandler}
          {...getOverrideProps(overrides, "Studio")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Github"
          onClick={() => {
            githubOnClick();
          }}
          {...getOverrideProps(overrides, "Github")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Confluence"
          onClick={() => {
            confluenceOnClick();
          }}
          {...getOverrideProps(overrides, "Confluence")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Jira"
          onClick={() => {
            jiraOnClick();
          }}
          {...getOverrideProps(overrides, "Jira")}
        ></Text>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="152px"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Right Frame")}
      >
        <Image
          width="unset"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(0,0,0,1)"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={profilePicture}
          {...getOverrideProps(overrides, "profile")}
        ></Image>
      </Flex>
    </Flex>
  );
}
