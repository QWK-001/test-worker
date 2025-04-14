import { useModel } from '@umijs/max';
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
  const { activeTab, updateActiveTab } = useModel(
    'subjectPage.useSubjectPageStore',
  ); // 当前选中的标签

  const renderTitle = () => {
    switch (activeTab) {
      case 1:
        return 'HOME';
      case 2:
        return 'NEW RELEASES';
      case 3:
        return 'EXCLUSIVE';
      case 4:
        return 'EARLY BIRD';
      case 5:
        return 'TOP GAMES';
      case 6:
        return 'SLOTS';
      default:
        return '';
    }
  };
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
          // scrollThreshold={0.8} // 调整触发加载的阈值
        >
          <div className="games-title">
            <img
              alt="NEW RELEASES icon"
              className="games-title-icon"
              src="https://static.crowncoinscasino.com/production/assets/game-category/[objectObject]/imageFile-1723386764636.png"
            />
            <span className="games-title-text">{renderTitle()}</span>
            <img
              alt="NEW RELEASES icon"
              className="games-title-icon hidden"
              src="https://static.crowncoinscasino.com/production/assets/game-category/[objectObject]/imageFile-1723386764636.png"
            />
          </div>
          <div className="games-grid">
            {data.map((item, index) =>
              activeTab === 5 || activeTab === 3 ? (
                <div key={index} className="card-skeleton">
                  <span style={{ fontSize: '12px' }}>骨架屏</span>
                </div>
              ) : (
                <div
                  key={index}
                  className="card-style"
                  style={{ animationDelay: `${index * 0.01}s` }} // 动态设置延迟，间隔为 0.01 秒
                >
                  <img src={item.src} alt={item.description} />
                  <p>img</p>
                </div>
              ),
            )}
          </div>
        </InfiniteScroll>
      </div>
    </ConfigProvider>
  );
};

export default InfiniteList;
