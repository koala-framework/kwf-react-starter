import styled from "styled-components";

export const Wrapper = styled.div`
    color: ${({ theme }) => theme.colors.typo};

    ${({ theme }) => theme.breakpoints.lg.mediaquery} {
        color: ${({ theme }) => theme.colors.gray};
    }
`;
