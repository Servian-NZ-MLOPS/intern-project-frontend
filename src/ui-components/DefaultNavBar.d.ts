/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DefaultNavBarOverridesProps = {
    DefaultNavBar?: PrimitiveOverrideProps<FlexProps>;
    "Left Frame"?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    HomeButton?: PrimitiveOverrideProps<ButtonProps>;
    StudioButton?: PrimitiveOverrideProps<ButtonProps>;
    GithubButton?: PrimitiveOverrideProps<ButtonProps>;
    ConfluenceButton?: PrimitiveOverrideProps<ButtonProps>;
    JiraButton?: PrimitiveOverrideProps<ButtonProps>;
    "Right Frame"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    LoginButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type DefaultNavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    homeClickHandler?: (event: SyntheticEvent) => void;
    loginClickHandler?: (event: SyntheticEvent) => void;
    logo?: React.ReactNode;
} & {
    overrides?: DefaultNavBarOverridesProps | undefined | null;
}>;
export default function DefaultNavBar(props: DefaultNavBarProps): React.ReactElement;
