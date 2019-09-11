import React from 'react';
import { Form, Input, Button, Icon, Checkbox, Alert } from 'antd';

import { WrappedFormInternalProps } from 'antd/lib/form/Form';

interface Props extends WrappedFormInternalProps {}
class FormComponent extends React.Component<Props> {
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div
                style={{
                    padding: '24px',
                    background: '#fff',
                    minHeight: '100%',
                }}
            >
                <Alert
                    message='Firebase 서비스 접근 권한'
                    description='Firebase 서비스에 접근 가능한 접근키와 비밀키를 입력해주세요. 필요한 권한만 넣은 키를 넣는 것을 추천합니다.'
                    type='warning'
                    showIcon
                />
            </div>
        );
    }
}
const FirebasePermissionContainer = Form.create({ name: 'firebase' })(FormComponent);
export default FirebasePermissionContainer;
