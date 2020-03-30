import React, { Component } from 'react';

export default class Carousel extends Component {
    constructor() {
        super();
        this.state = {
            picture: ['https://mpics.mgronline.com/pics/Images/562000009111301.JPEG','https://s359.kapook.com/rq/580/435/50/pagebuilder/64132db2-79cd-4885-ace1-143e3dbee87d.jpg','https://buzzebees.blob.core.windows.net/backofficehtmleditor/20180205-152543-_ac40ca25-c093-4437-a8e3-bcbb9d308691.jpg','https://mpics.mgronline.com/pics/Images/559000006939201.JPEG','https://www.goddesszilla.com/wp-content/uploads/2017/07/CXDKBVRUwAAApp7.jpg'],
            pictureIndex: 0
        };
    };
    changePicture = () => {
        this.setState({pictureIndex: this.state.pictureIndex === this.state.picture.length - 1? 0: this.state.pictureIndex + 1});
    };
    render() {
        return (
            <div>
                <img src={this.state.picture[this.state.pictureIndex]} alt='' onClick={this.changePicture} />
            </div>
        );
    };
};