import { Wrapper } from "app/components/Master.sc";
import { getConfig } from "app/config";
import { IApplicationState } from "app/store/rootReducer";
import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

export interface IComponentProps {
    exampleReducer: string;
}

const Master: React.FunctionComponent<IComponentProps> = ({ exampleReducer }) => (
    <Wrapper>
        Example reducer: {exampleReducer}
        <br />
        Example config: {getConfig("exampleApi")}
    </Wrapper>
);

const mapStateToProps = ({ exampleReducer }: IApplicationState) => ({
    exampleReducer,
});

const enhance = compose<IComponentProps, {}>(connect(mapStateToProps));

export default enhance(Master);
