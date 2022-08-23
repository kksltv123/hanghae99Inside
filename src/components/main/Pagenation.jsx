import React from 'react';
import styled from 'styled-components';

const Pagenation = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <StUl>
                {pageNumbers.map(number => (
                    <StLi key={number} onClick={() => paginate(number)}>
                        <span>
                            {number}
                        </span>
                    </StLi>
                ))}
            </StUl>
        </nav>
    );
};

const StUl = styled.ul`
    display: flex;
    margin-top: 50px;
    margin-bottom: 50px;
    justify-content: center;
`

const StLi = styled.li`
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.mainColor};
    display: block;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border: 1px solid #cdcdcd;
    border-radius: 5px;
`

export default Pagenation;