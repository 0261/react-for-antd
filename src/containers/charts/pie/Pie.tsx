import React, { Component } from 'react';
import PieComponent from '../../../components/charts/pie/Pie';
const data = [
    {
        id: 'lisp',
        label: 'lisp',
        value: 101,
        color: 'hsl(248, 70%, 50%)',
    },
    {
        id: 'c',
        label: 'c',
        value: 507,
        color: 'hsl(182, 70%, 50%)',
    },
    {
        id: 'elixir',
        label: 'elixir',
        value: 549,
        color: 'hsl(224, 70%, 50%)',
    },
    {
        id: 'sass',
        label: 'sass',
        value: 596,
        color: 'hsl(71, 70%, 50%)',
    },
    {
        id: 'scala',
        label: 'scala',
        value: 242,
        color: 'hsl(330, 70%, 50%)',
    },
    {
        id: 'python',
        label: 'python',
        value: 116,
        color: 'hsl(16, 70%, 50%)',
    },
    {
        id: 'java',
        label: 'java',
        value: 114,
        color: 'hsl(304, 70%, 50%)',
    },
    {
        id: 'php',
        label: 'php',
        value: 491,
        color: 'hsl(147, 70%, 50%)',
    },
    {
        id: 'javascript',
        label: 'javascript',
        value: 295,
        color: 'hsl(19, 70%, 50%)',
    },
    {
        id: 'css',
        label: 'css',
        value: 411,
        color: 'hsl(223, 70%, 50%)',
    },
    {
        id: 'go',
        label: 'go',
        value: 78,
        color: 'hsl(53, 70%, 50%)',
    },
    {
        id: 'make',
        label: 'make',
        value: 232,
        color: 'hsl(52, 70%, 50%)',
    },
    {
        id: 'hack',
        label: 'hack',
        value: 27,
        color: 'hsl(285, 70%, 50%)',
    },
    {
        id: 'haskell',
        label: 'haskell',
        value: 486,
        color: 'hsl(90, 70%, 50%)',
    },
    {
        id: 'ruby',
        label: 'ruby',
        value: 341,
        color: 'hsl(7, 70%, 50%)',
    },
    {
        id: 'rust',
        label: 'rust',
        value: 452,
        color: 'hsl(318, 70%, 50%)',
    },
    {
        id: 'stylus',
        label: 'stylus',
        value: 525,
        color: 'hsl(284, 70%, 50%)',
    },
    {
        id: 'erlang',
        label: 'erlang',
        value: 173,
        color: 'hsl(212, 70%, 50%)',
    },
];

export default class Pie extends Component {
    render() {
        return (
            <div>
                <PieComponent data={data}></PieComponent>
            </div>
        );
    }
}
