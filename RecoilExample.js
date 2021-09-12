import React, { Component } from 'react'
import MainComponent from './components/MainComponent'
import { View, Text } from 'react-native'
import { useRecoilState, useRecoilValue } from 'recoil';
import { counterState } from './recoil/atoms';
import { incrementSelector } from './recoil/selectors';

const RecoilExample = () => {
    const [count, setCounter] = useRecoilState(counterState);
    let value = useRecoilValue(incrementSelector);

    return (
        <>
            <MainComponent
                count={count}
                handleFireClick={() => setCounter(value)}
            />
        </>
    );
}

export default RecoilExample