import React from 'react';

const Item = ({ item }) => {
    return (
        <div class="card">
            <img
                style={ { display: 'block', margin: 'auto', width: '200px', height: '180px' } } src="https://img.alicdn.com/imgextra/i3/2204169558592/O1CN01z0JcsD2DLBXnM5QbW_!!2204169558592.jpg_430x430q90.jpg" class="card-img-top" alt="img" />
            <div class="card-body">
                <p class="card-text">{ item.name }</p>
                <button className="btn btn-success mr-2">
                    加入购物车
                    </button>
                <button className="btn btn-primary">
                    加入搜藏夹
                    </button>
            </div>
        </div>
    );
}

export default Item;
