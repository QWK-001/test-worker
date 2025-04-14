import { subjectMock } from '@/mock/mockData';
import Footer from '@/pages/footer';
import { ChromeFilled } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import './index.less';
import InfiniteList from './infiniteList';

const GamerHome = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const { activeTab, updateActiveTab } = useModel(
    'subjectPage.useSubjectPageStore',
  ); // 当前选中的标签

  const loadMoreData = () => {
    if (loading) return;
    setLoading(true);
    switch (activeTab) {
      case 1:
        // 首页mock数据
        setData(subjectMock.homeData);
        setLoading(false);
        break;
      case 2:
        fetch(
          'https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo',
        )
          .then((res) => res.json())
          .then((body) => {
            setData([...data, ...body.results]);
            setLoading(false);
          })
          .catch(() => setLoading(false));
        break;
      case 3:
        setData(subjectMock.exclusiveData);
        setLoading(false);
        break;
      case 4:
        setData(subjectMock.earlyBirdData);
        setLoading(false);
        break;
      case 5:
        setData(subjectMock.topGamesData);
        setLoading(false);
        break;
      case 6:
        setData(subjectMock.slotsData);
        setLoading(false);
        break;
      default:
        setLoading(false);
        break;
    }
  };

  useEffect(() => {
    loadMoreData();
  }, [activeTab]);

  return (
    <>
      <InfiniteList
        data={data}
        loadMoreData={loadMoreData}
        hasMore={data.length < 50}
      />
      {loading && (
        <Spin
          indicator={<ChromeFilled spin />}
          size="large"
          style={{ margin: '20px auto', color: '#fff', display: 'block' }}
        />
      )}
      <Footer />
    </>
  );
};

export default GamerHome;
