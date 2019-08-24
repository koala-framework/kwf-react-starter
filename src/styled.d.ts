import { IBreakpoints, IColors } from "app/theme";
import 'styled-components'

declare module 'styled-components' {
    // tslint:disable-next-line:interface-name
    export interface DefaultTheme {
        colors: IColors;
        breakpoints: IBreakpoints;
    }
}