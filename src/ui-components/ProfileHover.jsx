/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
export default function ProfileHover(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="152px"
      height="152px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProfileHover")}
      {...rest}
    >
      <Image
        width="100%"
        height="100%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(0,0,0,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.5)"
        borderRadius="76px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "profile")}
      ></Image>
    </View>
  );
}
