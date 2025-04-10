import { ConfigProvider } from 'antd';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './index.less';

interface InfiniteListProps {
  data: any[];
  loadMoreData: () => void;
  hasMore: boolean;
}

const InfiniteList: React.FC<InfiniteListProps> = ({
  data,
  loadMoreData,
  hasMore,
}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Skeleton: {
            gradientFromColor: '#a1a1a1',
            gradientToColor: '#6b6b6b',
            colorBgContainer: '#000000',
          },
        },
      }}
    >
      <div
        id="containerHeight"
        style={{
          overflow: 'auto',
          padding: '0 16px',
          margin: '0 auto',
          maxWidth: '1100px',
        }}
      >
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={hasMore}
          loader={
            <div className="custom-loader">
              {/* {[...Array(2)].map((_, i) => (
                <Skeleton.Node key={i} active className="skeleton-item" />
              ))} */}
              <></>
            </div>
          }
          scrollableTarget="scrollableDiv"
          scrollThreshold={0.8} // 调整触发加载的阈值
        >
          <div className="games-title">
            <img
              alt="NEW RELEASES icon"
              className="games-title-icon"
              src="https://static.crowncoinscasino.com/production/assets/game-category/[objectObject]/imageFile-1723386764636.png"
            />
            <span className="games-title-text">NEW RELEASES</span>
            <img
              alt="NEW RELEASES icon"
              className="games-title-icon hidden"
              src="https://static.crowncoinscasino.com/production/assets/game-category/[objectObject]/imageFile-1723386764636.png"
            />
          </div>
          {/* <List
            className="games-grid"
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.email}>
                <div className="card-style">Card content</div>
              </List.Item>
            )}
          /> */}
          <div className="games-grid">
            {data.map((item) => (
              <div key={item.email} className="card-skeleton">
                {/* <img src={item.picture.large} alt={item.name.first} /> */}
                <p>img</p>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </ConfigProvider>
  );
};

export default InfiniteList;
