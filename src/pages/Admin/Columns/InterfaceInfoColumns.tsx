import {Link} from '@@/exports';
import {ProColumns} from '@ant-design/pro-components';
import {NewRequestColumn, NewResponseColumn} from "@/components/ParamsTable/components/type";
import {InterfaceRequestMethodEnum} from "@/enum/commonEnum";
import {Tag} from 'antd';

export const defaultNewRequestColumn: NewRequestColumn = {
  fieldName: '',
  required: "是",
  type: "string",
  desc: "",
}

export const defaultNewResponseColumn: NewResponseColumn = {
  fieldName: '',
  type: "string",
  desc: "",
}

export const requestParam: ProColumns[] = [
  {
    title: '参数名称',
    dataIndex: 'fieldName',
    formItemProps: {
      rules: [
        {
          required: true,
          whitespace: true,
          message: '此项是必填项',
        },
      ],
    },
  },
  {
    title: '必填',
    valueType: "select",
    dataIndex: 'required',
    valueEnum: {
      "是": {text: "是"},
      "否": {text: "否"},
    }, formItemProps: {
      rules: [
        {
          required: true,
          whitespace: true,
          message: '此项是必填项',
        },
      ],
    },
  },
  {
    title: '参数类型',
    dataIndex: 'type',
    valueEnum: {
      "int": {text: "int"},
      "string": {text: "string"},
      "long": {text: "long"},
      "boolean": {text: "boolean"},
      "double": {text: "double"},
      "object": {text: "object"},
    },
    valueType: "select",
    formItemProps: {
      rules: [
        {
          required: true,
          whitespace: true,
          message: '此项是必填项',
        },
      ],
    },
  },
  {
    title: '描述',
    dataIndex: 'desc',
  },
]
export const responseParam: ProColumns[] = [
  {
    title: '参数名称',
    dataIndex: 'fieldName',
    formItemProps: {
      rules: [
        {
          required: true,
          whitespace: true,
          message: '此项是必填项',
        },
      ],
    },
  },
  {
    title: '参数类型',
    dataIndex: 'type',
    valueEnum: {
      "int": {text: "int"},
      "string": {text: "string"},
      "long": {text: "long"},
      "boolean": {text: "boolean"},
      "double": {text: "double"},
      "object": {text: "object"},
    },
    valueType: "select",
    formItemProps: {
      rules: [
        {
          required: true,
          whitespace: true,
          message: '此项是必填项',
        },
      ],
    },
  },
  {
    title: '描述',
    dataIndex: 'desc',
  },
]

const InterfaceInfoColumns: ProColumns<API.InterfaceInfo>[] = [
  {
    title: 'id',
    dataIndex: 'id',
    valueType: 'index',
    align: 'center',
    width: 40,
    // hideInTable: true,
    key: 'id',
  },
  {
    title: '接口名称',
    dataIndex: 'name',
    copyable: true,
    valueType: 'text',
    align: 'center',
    width: 180,
    render: (_, record) => (
      <Link key={record.id} to={`/interface_info/${record.id}`}>
        {record.name}
      </Link>
    ),
    ellipsis: true,
    key: 'name',
  },
  // {
  //   title: '接口地址',
  //   dataIndex: 'url',
  //   valueType: 'text',
  //   ellipsis: true,
  //   copyable: true,
  //   key: 'url',
  // },
  // {
  //   title: '返回格式',
  //   key: "returnFormat",
  //   dataIndex: 'returnFormat',
  //   width: 'lg',
  //   valueType: "text",
  // },
  {
    title: '接口图片',
    dataIndex: 'avatarUrl',
    valueType: 'image',
    align: 'center',
    width: 80,
    key: 'avatarUrl',
  },
  {
    title: '总调用次数',
    dataIndex: 'totalInvokeNum',
    valueType: 'text',
    align: 'center',
    search: false,
    width: 90,
    key: "totalInvokeNum",
  },
  {
    title: '描述',
    dataIndex: 'description',
    valueType: 'textarea',
    align: 'center',
    width: 150,
    copyable: true,
    ellipsis: true,
    key: 'description',
  }
  ,
  {
    title: '请求示例',
    dataIndex: 'requestExample',
    key: 'requestExample',
    valueType: 'text',
    align: 'center',
    width: 120,
    search: false,
    copyable: true,
    ellipsis: true,
  },
  // {
  //   title: '请求头',
  //   dataIndex: 'requestHeader',
  //   valueType: 'text',
  //   align: 'center',
  //   search: false,
  //   width: 120,
  //   ellipsis: true,
  //   copyable: true,
  //   key: 'requestHeader',
  // },
  // {
  //   title: '请求参数',
  //   dataIndex: 'requestParams',
  //   valueType: 'text',
  //   search: false,
  //   width: 120,
  //   ellipsis: true,
  //   copyable: true,
  //   key: 'requestParams',
  // },
  // {
  //   title: '响应头',
  //   dataIndex: 'responseHeader',
  //   valueType: 'text',
  //   search: false,
  //   width: 120,
  //   copyable: true,
  //   ellipsis: true,
  //   key: 'responseHeader',
  // },
  {
    title: '状态',
    filters: true,
    onFilter: true,
    width: 100,
    dataIndex: 'status',
    align: 'center',
    key: 'status',
    valueEnum: {
      0: {
        text: '审核中',
        status: 'Default',
      },
      2: {
        text: '已下线',
        status: 'Error',
      },
      1: {
        text: '已上线',
        status: 'Processing',
      },
    },
  },
  {
    title: '请求类型',
    dataIndex: 'method',
    filters: true,
    width: 100,
    align: 'center',
    onFilter: true,
    valueType: 'text',
    key: 'method',
    render: (_, record) => (
      <Tag color={InterfaceRequestMethodEnum[record.method ?? 'default']}>{record.method}</Tag>
    ),
    valueEnum: {
      GET: {
        text: 'GET',
      },
      POST: {
        text: 'POST',
      },
      PUT: {
        text: 'PUT',
      },
      DELETE: {
        text: 'DELETE',
      },
    },
  },
  // {
  //   title: '更新时间',
  //   dataIndex: 'updateTime',
  //   valueType: 'dateTime',
  //   key: 'updateTime',
  // },
  // {
  //   title: '创建时间',
  //   dataIndex: 'createTime',
  //   valueType: 'dateTime',
  //   key: 'createTime',
  //   search: false,
  // },
];

export default InterfaceInfoColumns;
