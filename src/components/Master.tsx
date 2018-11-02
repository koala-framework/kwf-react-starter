import { Wrapper } from "app/components/Master.sc";
import { getConfig } from "app/config";
import { IApplicationState } from "app/store/rootReducer";
import { IWithTheme } from "app/theme";
import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withTheme } from "styled-components";

export interface IComponentProps extends IWithTheme {
    exampleReducer: string;
}

const Master: React.SFC<IComponentProps> = ({ exampleReducer }) => (
    <Wrapper>
        Example reducer: {exampleReducer}
        <br />
        Example config: {getConfig("exampleApi")}
    </Wrapper>
);

const mapStateToProps = ({ exampleReducer }: IApplicationState) => ({
    exampleReducer,
});

const enhance = compose<IComponentProps, {}>(
    withTheme,
    connect(mapStateToProps),
);

export default enhance(Master);
