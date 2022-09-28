import { Row } from '@nextui-org/react';
import React from 'react'

// Progress bar
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CommentLengthProgressBar = ({ content }: { content: string }) => (
    <Row css={{ width: "$10", height: "$10" }} >
        <CircularProgressbar
            value={content.length}
            maxValue={100}
            styles={buildStyles({
                pathColor: "#FFF",
                trailColor: "rgb(24, 24, 22)",
            })}
        />
    </Row>
)

export default CommentLengthProgressBar