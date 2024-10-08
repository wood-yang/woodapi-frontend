import React, {useEffect, useState} from "react";
import ProCard from "@ant-design/pro-card";
import {Badge, Card, Image, List, Spin} from "antd";
import Search from "antd/es/input/Search";
import {history} from "@umijs/max";
import rabbit from '@/../public/assets/rabbit.png';
import {
  listInterfaceInfoByPageUsingGet
} from "@/services/woodapi-backend/interfaceInfoController";

const InterfaceSquare: React.FC = () => {
  const [data, setData] = useState<API.InterfaceInfo[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [total, setTotal] = useState<number>();
  const [pageSize] = useState<number>(12);
  const [loading, setLoading] = useState<boolean>(false);

  const loadData = async (current = 1) => {
    setLoading(true)
    const res = await listInterfaceInfoByPageUsingGet({
      current: current,
      searchText: searchText,
      // name: searchText,
      pageSize: pageSize,
      sortField: 'totalInvokeNum',
      sortOrder: 'descend',
      // description: searchText,
    });
    if (res.code === 0 && res.data) {
      setData(res?.data?.records || []);
      setTotal(res.data.total)
      setLoading(false)
    }
    else {
      setLoading(false)
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const onSearch = async () => {
    const res = await listInterfaceInfoByPageUsingGet({
      current: 1,
      searchText: searchText,
    });
    if (res.data) {
      setData(res?.data?.records || []);
      setTotal(res?.data?.total || 0)
    }
  };

  return (
    <>
      <Card hoverable>
        <ProCard layout="center">
          <Search
            showCount
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            allowClear
            size={"large"}
            maxLength={50}
            enterButton="搜索"
            placeholder={"快来搜索你想要的接口吧"}
            onSearch={onSearch}
            style={{maxWidth: 600, height: 60}}/>
        </ProCard>
      </Card>
      <br/>
      <br/>
      <Spin spinning={loading}>
        <List
          pagination={{
            onChange: (page) => {
              loadData(page)
            },
            pageSize: pageSize,
            total: total
          }}
          grid={{
            gutter: 20,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 4,
            xl: 5,
            xxl: 6
          }}
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <ProCard key={index} bordered hoverable direction="column" style={{height: 320}}>
                <ProCard layout="center" onClick={() => {
                  history.push(`/interface_info/${item.id}`)
                }}>
                  <Badge.Ribbon text={item.totalInvokeNum} color="pink">
                    <Image style={{width: 180, borderRadius: 8, marginLeft: 0}}
                           src={item?.avatarUrl ?? rabbit}
                           fallback={rabbit}
                           alt={item.name}
                           preview={false}
                    />
                  </Badge.Ribbon>
                </ProCard>
                <ProCard onClick={() => {
                  history.push(`/interface_info/${item.id}`)
                }} layout="center" style={{marginTop: -10, fontSize: 16}}>
                  {item.name}
                </ProCard>
                <ProCard onClick={() => {
                  history.push(`/interface_info/${item.id}`)
                }} layout="center" style={{marginTop: -18, fontSize: 14}}>
                  {!item.description ? "暂无接口描述" : item.description.length > 15 ? item.description.slice(0, 15) + '...' : item.description}
                </ProCard>
              </ProCard>
            </List.Item>
          )}
        />
      </Spin>
    </>
  )
};

export default InterfaceSquare;
