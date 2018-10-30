import { Wrapper } from "app/components/Master.sc";
import { getConfig } from "app/config";
import { IApplicationState } from "app/store/rootReducer";
import { IWithTheme } from "app/theme";
import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withTheme } from "styled-components";

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
