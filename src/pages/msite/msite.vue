<template>
    <div>
        <head-top signin-up='msite'>
                    <router-link :to="'/search/geohash'" class="link_search" slot="search">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <circle cx="8" cy="8" r="7" stroke="rgb(255,255,255)" stroke-width="1" fill="none"/>
                            <line x1="14" y1="14" x2="20" y2="20" style="stroke:rgb(255,255,255);stroke-width:2"/>
                        </svg>
                    </router-link>
                    <router-link to="/home" slot="msite-title" class="msite_title">
                        <span class="title_text ellipsis">{{msiteTitle}}</span>
                    </router-link>
        </head-top>
    </div>
</template>

<script>
import headTop from 'components/header/header'
import footGuide from 'components/footer/footGuide'

import { mapMutations} from 'vuex'

    export default {
        data() {
            return {
            geohash: '', // city页面传递过来的地址geohash
            msiteTitle: '请选择地址...', // msite页面头部标题
            foodTypes: [], // 食品分类列表
            hasGetData: false, //是否已经获取地理位置数据，成功之后再获取商铺列表信息
            imgBaseUrl: 'https://fuss10.elemecdn.com', //图片域名地址
            }
        },
        components:{
            headTop
        }
    }
</script>

<style lang="scss" scoped>
 @import 'src/style/mixin';
	.link_search{
		left: .8rem;
		@include wh(.9rem, .9rem);
		@include ct;
	}
    .msite_title{
		@include center;
        width: 50%;
        color: #fff;
        text-align: center;
        margin-left: -0.5rem;
        .title_text{
            @include sc(0.8rem, #fff);
            text-align: center;
            display: block;
        }
	}
</style>