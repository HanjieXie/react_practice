import React from 'react';
// 假设这些是您需要的导入
// import { Form, FormItem, Input } from '相应的库或路径';

const MyFormComponent = () => {
  const form = React.useRef(null);

  const submit = () => {
    // 表单提交
    form.current.submitForm((formValue) => {
      console.log(formValue);
    });
  };

  const reset = () => {
    // 表单重置
    form.current.resetForm();
  };

  return (
    <div className="box">
      <Form ref={form}>
        <FormItem name="name" label="我是">
          <Input />
        </FormItem>
        <FormItem name="mes" label="我想对大家说">
          <Input />
        </FormItem>
        {/* 假设以下是您不需要改动的部分 */}
        <input placeholder="不需要的input" />
        <Input />
      </Form>
      <div className="btns">
        <button className="searchbtn" onClick={submit}>
          提交
        </button>
        <button className="concellbtn" onClick={reset}>
          重置
        </button>
      </div>
    </div>
  );
};

export default MyFormComponent;
