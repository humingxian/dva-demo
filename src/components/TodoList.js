import React from "react"
import { Table, Popconfirm, Button } from "antd"

const TodoList = ({onAdd, onDelete, todos}) => {

  const columns = [
    {
      dataIndex: "name",
      title: "名称"
    },
    {
      dataIndex: "age",
      title: "年龄"
    },
    {
    title: '操作',
    render: (text, record, index) => {
      return (
        <>
          <Popconfirm title="确定删除嘛?" onConfirm={() => onDelete(record.id)}>
            <Button>删除</Button>
          </Popconfirm>
          {index + 1 === todos.length && <Button onClick={() => onAdd()}>新增</Button>}
        </>
      );
    }
  }
  ]
  return (
    <Table columns={columns} dataSource={todos} rowKey={row => row.id} pagination={false} />
  )
}

export default TodoList