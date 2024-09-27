import React from 'react';

const TrackingNumberPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/ma-van-don/?num=YT7489038596008`);
  const data = await res.json();
  const html = data.html as string;
  const array = html.split('<div id="trackingContent">');
  const array2 = array[1].split('</section>');

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: `<div id="trackingContent"> ${array2[0]}`,
        }}
      />
    </div>
  );
};

export default TrackingNumberPage;
