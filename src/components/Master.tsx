import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withTheme } from "styled-components";
import { IApplicationState } from "../store/rootReducer";
import { IWithTheme } from "../theme";
import { Wrapper } from "./Master.sc";

export interface IComponentProps extends IWithTheme {
    domain: string;
}

const Master: React.SFC<IComponentProps> = ({ domain }) => <Wrapper>Domain: {domain}</Wrapper>;

const mapStateToProps = ({ domain }: IApplicationState) => ({
    domain,
});

const enhance = compose<IComponentProps, {}>(
    withTheme,
    connect(mapStateToProps),
);

export default enhance(Master);
