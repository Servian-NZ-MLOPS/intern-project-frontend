/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarOverridesProps = {
    NavBar?: PrimitiveOverrideProps<FlexProps>;
    "Left Frame"?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    logo?: PrimitiveOverrideProps<ImageProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    Studio?: PrimitiveOverrideProps<TextProps>;
    Github?: PrimitiveOverrideProps<TextProps>;
    Confluence?: PrimitiveOverrideProps<TextProps>;
    Jira?: PrimitiveOverrideProps<TextProps>;
    "Right Frame"?: PrimitiveOverrideProps<FlexProps>;
    profile?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type NavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    logo?: String;
    profilePicture?: String;
    homeClickHandler?: (event: SyntheticEvent) => void;
    studioClickHandler?: (event: SyntheticEvent) => void;
} & {
    overrides?: NavBarOverridesProps | undefined | null;
}>;
export default function NavBar(props: NavBarProps): React.ReactElement;
