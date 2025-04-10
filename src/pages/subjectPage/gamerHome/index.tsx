import Footer from '@/pages/footer';
import { useEffect, useState } from 'react';
import './index.less';
import InfiniteList from './infiniteList';

const GamerHome = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);

  const loadMoreData = () => {
    if (loading) return;
    setLoading(true);
    fetch(
      'https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo',
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <>
      <InfiniteList
        data={data}
        loadMoreData={loadMoreData}
        hasMore={data.length < 50}
      />
      <Footer />
    </>
  );
};

export default GamerHome;
