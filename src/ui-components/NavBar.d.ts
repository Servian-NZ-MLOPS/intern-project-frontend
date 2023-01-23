/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, ImageProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarOverridesProps = {
    NavBar?: PrimitiveOverrideProps<FlexProps>;
    "Left Frame"?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    HomeButton?: PrimitiveOverrideProps<ButtonProps>;
    StudioButton?: PrimitiveOverrideProps<ButtonProps>;
    GithubButton?: PrimitiveOverrideProps<ButtonProps>;
    ConfluenceButton?: PrimitiveOverrideProps<ButtonProps>;
    JiraButton?: PrimitiveOverrideProps<ButtonProps>;
    "Right Frame"?: PrimitiveOverrideProps<FlexProps>;
    profile?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type NavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    logo?: React.ReactNode;
    profilePicture?: String;
    homeClickHandler?: (event: SyntheticEvent) => void;
    studioClickHandler?: (event: SyntheticEvent) => void;
} & {
    overrides?: NavBarOverridesProps | undefined | null;
}>;
export default function NavBar(props: NavBarProps): React.ReactElement;
