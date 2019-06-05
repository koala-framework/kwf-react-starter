import { Wrapper } from "app/components/Master.sc";
import { getConfig } from "app/config";
import * as React from "react";

export default () => <Wrapper>Example config: {getConfig("exampleApi")}</Wrapper>;
