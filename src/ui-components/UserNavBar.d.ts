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
export declare type UserNavBarOverridesProps = {
    UserNavBar?: PrimitiveOverrideProps<FlexProps>;
    "Left Frame"?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    HomeButton?: PrimitiveOverrideProps<ButtonProps>;
    StudioButton?: PrimitiveOverrideProps<ButtonProps>;
    ModelsButton?: PrimitiveOverrideProps<ButtonProps>;
    GithubButton?: PrimitiveOverrideProps<ButtonProps>;
    Confluence?: PrimitiveOverrideProps<ButtonProps>;
    "Right Frame"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    profile?: PrimitiveOverrideProps<ImageProps>;
    LogoutButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type UserNavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    logo?: React.ReactNode;
    profilePicture?: String;
    homeClickHandler?: (event: SyntheticEvent) => void;
    studioClickHandler?: (event: SyntheticEvent) => void;
    logoutClickHandler?: (event: SyntheticEvent) => void;
    isStudioLoading?: Boolean;
    modelsClickHandler?: (event: SyntheticEvent) => void;
} & {
    overrides?: UserNavBarOverridesProps | undefined | null;
}>;
export default function UserNavBar(props: UserNavBarProps): React.ReactElement;
