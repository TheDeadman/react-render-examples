import React, { useState, useRef, useEffect } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import styles from 'MemoizedComponents.module.scss';
import { useInfiniteLoopContext } from '../context';

const LastUpdatedDisplay = () => {

    const { lastUpdated } = useInfiniteLoopContext();

    return (
        <Paper className={`${styles.card} ${styles.cardGreen}`}>
            <RenderCount componentName="LastUpdatedDisplay" />
            <Typography variant="h6" className={`${styles.title} ${styles.titleGreen}`}>
                Last Updated Display
            </Typography>
            <Typography>Last Updated: {lastUpdated}</Typography>
        </Paper>
    );
};

export default LastUpdatedDisplay;