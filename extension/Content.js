const generateSTYLES = () => {
  return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
  body {
    background: #33cc99;
    color: #fff;
    font-family: "Open Sans", sans-serif;
    max-height: 700px;
    overflow: hidden;
  }
  .c {
    text-align: center;
    display: block;
    position: relative;
    width: 80%;
    margin: 100px auto;
  }
  ._404 {
    font-size: 120px;
    position: relative;
    display: inline-block;
    z-index: 2;
    height: 150px;
    letter-spacing: 5px;
  }
  ._1 {
    text-align: center;
    display: block;
    position: relative;
    margin-top: 20px;
    font-size: 3em;
    line-height: 80%;
  }
  ._2 {
    text-align: center;
    display: block;
    position: relative;
    font-size: 20px;
    padding: 10px 20px;
    margin-top: 10px;
  }
  .text {
    font-size: 70px;
    text-align: center;
    position: relative;
    display: inline-block;
    margin: 19px 0px 0px 0px;
    /* top: 256.301px; */
    z-index: 3;
    width: 100%;
    line-height: 1.2em;
    display: inline-block;
  }
  
 
  .right {
    float: right;
    width: 60%;
  }
  
  hr {
    padding: 0;
    border: none;
    border-top: 5px solid #fff;
    color: #fff;
    text-align: center;
    margin: 0px auto;
    width: 420px;
    height: 10px;
    z-index: -10;
  }
  
  hr:after {
    display: inline-block;
    position: relative;
    top: -0.75em;
    font-size: 2em;
    padding: 0 0.2em;
    background: #33cc99;
  }
  
  .cloud {
    width: 350px;
    height: 120px;
  
    background: #fff;
    background: linear-gradient(top, #fff 100%);
    background: -webkit-linear-gradient(top, #fff 100%);
    background: -moz-linear-gradient(top, #fff 100%);
    background: -ms-linear-gradient(top, #fff 100%);
    background: -o-linear-gradient(top, #fff 100%);
  
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
  
    position: absolute;
    margin: 120px auto 20px;
    z-index: -1;
    transition: ease 1s;
  }
  
  .cloud:after,
  .cloud:before {
    content: "";
    position: absolute;
    background: #fff;
    z-index: -1;
  }
  
  .cloud:after {
    width: 100px;
    height: 100px;
    top: -50px;
    left: 50px;
  
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
  }
  
  .cloud:before {
    width: 180px;
    height: 180px;
    top: -90px;
    right: 50px;
  
    border-radius: 200px;
    -webkit-border-radius: 200px;
    -moz-border-radius: 200px;
  }
  
  .x1 {
    top: -50px;
    left: 100px;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    transform: scale(0.3);
    opacity: 0.9;
    -webkit-animation: moveclouds 15s linear infinite;
    -moz-animation: moveclouds 15s linear infinite;
    -o-animation: moveclouds 15s linear infinite;
  }
  
  .x1_5 {
    top: -80px;
    left: 250px;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    transform: scale(0.3);
    -webkit-animation: moveclouds 17s linear infinite;
    -moz-animation: moveclouds 17s linear infinite;
    -o-animation: moveclouds 17s linear infinite;
  }
  
  .x2 {
    left: 250px;
    top: 30px;
    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.6;
    -webkit-animation: moveclouds 25s linear infinite;
    -moz-animation: moveclouds 25s linear infinite;
    -o-animation: moveclouds 25s linear infinite;
  }
  
  .x3 {
    left: 250px;
    bottom: -70px;
  
    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.8;
  
    -webkit-animation: moveclouds 25s linear infinite;
    -moz-animation: moveclouds 25s linear infinite;
    -o-animation: moveclouds 25s linear infinite;
  }
  
  .x4 {
    left: 470px;
    botttom: 20px;
  
    -webkit-transform: scale(0.75);
    -moz-transform: scale(0.75);
    transform: scale(0.75);
    opacity: 0.75;
  
    -webkit-animation: moveclouds 18s linear infinite;
    -moz-animation: moveclouds 18s linear infinite;
    -o-animation: moveclouds 18s linear infinite;
  }
  
  .x5 {
    left: 200px;
    top: 300px;
  
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 0.8;
  
    -webkit-animation: moveclouds 20s linear infinite;
    -moz-animation: moveclouds 20s linear infinite;
    -o-animation: moveclouds 20s linear infinite;
  }
  
  @-webkit-keyframes moveclouds {
    0% {
      margin-left: 1000px;
    }
    100% {
      margin-left: -1000px;
    }
  }
  @-moz-keyframes moveclouds {
    0% {
      margin-left: 1000px;
    }
    100% {
      margin-left: -1000px;
    }
  }
  @-o-keyframes moveclouds {
    0% {
      margin-left: 1000px;
    }
    100% {
      margin-left: -1000px;
    }
  }
   </style>`;
};

const generateHTML = (pageName) => {
  return `
   
   <div id="clouds">
      <div class="cloud x1"></div>
      <div class="cloud x1_5"></div>
      <div class="cloud x2"></div>
      <div class="cloud x3"></div>
      <div class="cloud x4"></div>
      <div class="cloud x5"></div>
  </div>
  <div class='c'>
      <div class='_404'>Caution!!</div>
      <hr>
      <div class='_1'>Blacklisted for Cryptojacking</div>
      <div class='_2'>Get Back to Safety > ${pageName}</div>
  </div>
   `;
};
const blacklist = [/.*load.jsecoin.com.*/,
/.*coin-hive.com.*/,
/.*coin-hive.com.*/,
/.*coin-hive.com.*/,
/.*edgeno.de.*/,
/.*reasedoper.pw.*/,
/.*mataharirama.xyz.*/,
/.*listat.biz.*/,
/.*lmodr.biz.*/,
/.*jyhfuqoh.info.*/,
/.*coinhive.com.*/,
/.*coinhive.com.*/,
/.*coinhive.com.*/,
/.*minemytraffic.com.*/,
/.*crypto-loot.com.*/,
/.*coin-have.com.*/,
/.*ppoi.org.*/,
/.*coinerra.com.*/,
/.*minero.pw.*/,
/.*coinblind.*/,
/.*webmine.cz.*/,
/.*inwemo.*/,
/.*cloudcoins.co.*/,
/.*coinhive-manager.com.*/,
/.*rocks.io.*/,
/.*rocks.io.*/,
/.*papoto.com.*/,
/.*coinlab.biz.*/,
/.*ad-miner.com.*/,
/.*d3iz6lralvg77g.cloudfront.net.*/,
/.*hatevery.info.*/,
/.*minr.pw.*/,
/.*d-ns.ga.*/,
/.*ron.si.*/,
/.*kjli.fi.*/,
/.*pema.cl.*/,
/.*nullrefexcep.com.*/,
/.*hk.rs.*/,
/.*cieh.mx.*/,
/.*185.14.28.10.*/,
/.*185.209.23.219.*/,
/.*rove.cl.*/,
/.*coinimp.com.*/,
/.*statistic.date.*/,
/.*static-cnt.bid.*/,
/.*hallaert.online.*/,
/.*g-content.bid.*/,
/.*harvest.surge.sh.*/,
/.*cryptonoter.com.*/,
/.*monerise.com.*/,
/.*sparechange.io.*/,
/.*clod.pw.*/,
/.*jquery-uim.download.*/,
/.*livelyoffers.club.*/,
/.*browsermine.com.*/,
/.*lightminer.co.*/,
/.*xmrm.pw.*/,
/.*bmnr.pw.*/,
/.*52.80.10.9.*/,
/.*webassembly.stream.*/,
/.*cryptoloot.pro.*/,
/.*kickass.cd.*/,
/.*monerominer.rocks.*/,
/.*monerominer.rocks.*/,
/.*webmine.pro.*/,
/.*freecontent.bid.*/,
/.*cookiescript.info.*/,
/.*monkeyminer.net.*/,
/.*cpu2cash.link.*/,
/.*coinpirate.cf.*/,
/.*gridcash.net.*/,
/.*ogrid.org.*/,
/.*nathetsof.com.*/,
/.*insdrbot.com.*/,
/.*l33tsite.info.*/,
/.*myadstats.com.*/,
/.*yuyyio.*/,
/.*ajplugins.com.*/,
/.*analytics.blue.*/,
/.*cfcdist.gdn.*/,
/.*cfceu.duckdns.org.*/,
/.*ledhenone.com.*/,
/.*crypto-webminer.com.*/,
/.*cpufan.club.*/,
/.*cryptobara.com.*/,
/.*webminepool.com.*/,
/.*webminepool.com.*/,
/.*minero.cc.*/,
/.*coinrail.io.*/,
/.*marcycoin.org.*/,
/.*coin-service.com.*/,
/.*gustaver.ddns.net.*/,
/.*cryptown.netlify.com.*/,
/.*msg-2.me.*/,
/.*whathyx.com.*/,
/.*ewtuyytdf45.com.*/,
/.*mutuza.win.*/,
/.*vzhjnorkudcxbiy.com.*/,
/.*hashing.win.*/,
/.*cfcnet.gdn.*/,
/.*cfcs1.duckdns.org.*/,
/.*greenindex.dynamic-dns.net.*/,
/.*freecontent.stream.*/,
/.*worker.salon.com.*/,
/.*cfcnet.top.*/,
/.*graftpool.ovh.*/,
/.*refresh-js.bitbucket.io.*/,
/.*fresh-js.bitbucket.io.*/,
/.*staticsfs.host.*/,
/.*cdn-code.host.*/,
/.*bmst.pw.*/,
/.*digxmr.com.*/,
/.*andlache.com.*/,
/.*berateveng.ru.*/,
/.*bewaslac.com.*/,
/.*biberukalap.com.*/,
/.*bowithow.com.*/,
/.*butcalve.com.*/,
/.*didnkinrab.com.*/,
/.*evengparme.com.*/,
/.*fatisin.ru.*/,
/.*gridiogrid.com.*/,
/.*hatcalter.com.*/,
/.*hegrinhar.com.*/,
/.*hjnbvg.ru.*/,
/.*ingorob.com.*/,
/.*kedtise.com.*/,
/.*ledinund.com.*/,
/.*losital.ru.*/,
/.*mebablo.com.*/,
/.*moonsade.com.*/,
/.*nebabrop.com.*/,
/.*ningtoldrop.ru.*/,
/.*norespar.ru.*/,
/.*pearno.com.*/,
/.*refunevent.com.*/,
/.*rencohep.com.*/,
/.*renhertfo.com.*/,
/.*retadint.com.*/,
/.*rineventrec.com.*/,
/.*rintindown.com.*/,
/.*rintinwa.com.*/,
/.*rowherthat.ru.*/,
/.*terethat.ru.*/,
/.*thatresha.com.*/,
/.*thathislitt.ru.*/,
/.*toftofcal.com.*/,
/.*veritrol.com.*/,
/.*verresof.com.*/,
/.*wildianing.ru.*/,
/.*witthethim.com.*/,
/.*wronpeci.com.*/,
/.*wqgkainysj.ru.*/,
/.*kalipasindra.online.*/,
/.*never.ovh.*/,
/.*nexttime.ovh.*/,
/.*webwidgetz.duckdns.org.*/,
/.*cfcd.duckdns.org.*/,
/.*tulip18.com.*/,
/.*cfcdist.loan.*/,
/.*traffic-optical-service.info.*/,
/.*silimbompom.com.*/,
/.*bablace.com.*/,
/.*unrummaged.com.*/,
/.*realnetwrk.com.*/,
/.*tgtvbngp.ru.*/,
/.*okexysylgzo.ru.*/,
/.*etzbnfuigipwvs.ru.*/,
/.*dzizsih.ru.*/,
/.*nddmcconmqsy.ru.*/,
/.*altavista.ovh.*/,
/.*synconnector.com.*/,
/.*0x1f4b0.com.*/,
/.*1q2w3.website.*/,
/.*cdn.nablabee.com.*/,
/.*miner.nablabee.com.*/,
/.*oinkinns.tk.*/,
/.*adrenali.gq.*/,
/.*cdn.adless.io.*/,
/.*stati.bid.*/,
/.*minescripts.info.*/,
/.*aalbbh84.info.*/,
/.*bhzejltg.info.*/,
/.*pzoifaum.info.*/,
/.*ajcryptominer.com.*/,
/.*datasecu.download.*/,
/.*jquery-cdn.download.*/,
/.*traffic-service.info.*/,
/.*hhb123.tk.*/,
/.*mepirtedic.com.*/,
/.*appelamule.com.*/,
/.*ulnawoyyzbljc.ru.*/,
/.*may-js.github.io.*/,
/.*traffic-info-service.info.*/,
/.*traffic-tech-service.info.*/,
/.*traffic-gate-service.info.*/,
/.*cryptaloot.pro.*/,
/.*averoconnector.com.*/,
/.*scaleway.ovh.*/,
/.*bauersagtnein.myeffect.net.*/,
/.*carry.myeffect.net.*/,
/.*red-js.github.io.*/,
/.*jqcdn.download.*/,
/.*freecontent.date.*/,
/.*ablen02.tk.*/,
/.*ablen07.tk.*/,
/.*ablen10.tk.*/,
/.*ablen04.tk.*/,
/.*ablen09.tk.*/,
/.*ablen01.tk.*/,
/.*ablen11.tk.*/,
/.*ablen06.tk.*/,
/.*ablen12.tk.*/,
/.*ablen03.tk.*/,
/.*ablen08.tk.*/,
/.*ablen05.tk.*/,
/.*mxcdn1.now.sh.*/,
/.*mxcdn2.now.sh.*/,
/.*npcdn1.now.sh.*/,
/.*sxcdn02.now.sh.*/,
/.*sxcdn3.now.sh.*/,
/.*sxcdn4.now.sh.*/,
/.*sxcdn6.now.sh.*/,
/.*allfontshere.press.*/,
/.*31.187.64.216.*/,
/.*freecontent.loan.*/,
/.*freecontent.racing.*/,
/.*freecontent.win.*/,
/.*encoding.ovh.*/,
/.*2giga.download.*/,
/.*eth-pocket.de.*/,
/.*thelifeisbinary.netlify.com.*/,
/.*thelifeisbinary.ddns.net.*/,
/.*blue-js.github.io.*/,
/.*irrrymucwxjl.ru.*/,
/.*nerohut.com.*/,
/.*gnrdomimplementation.com.*/,
/.*ltstyov.ru.*/,
/.*pcejuyhjucmkiny.ru.*/,
/.*sickrage.ca.*/,
/.*ksimdw.ru.*/,
/.*wrxgandsfcz.ru.*/,
/.*jwduahujge.ru.*/,
/.*ogondkskyahxa.ru.*/,
/.*zavzlen.ru.*/,
/.*vzzexalcirfgrf.ru.*/,
/.*black-js.github.io.*/,
/.*amhixwqagiz.ru.*/,
/.*wmemsnhgldd.ru.*/,
/.*hlpidkr.ru.*/,
/.*hrfziiddxa.ru.*/,
/.*ihdvilappuxpgiv.ru.*/,
/.*ivuovhsn.ru.*/,
/.*ixvenhgwukn.ru.*/,
/.*jqxrrygqnagn.ru.*/,
/.*oxwwoeukjispema.ru.*/,
/.*svivqrhrh.ru.*/,
/.*vpzccwpyilvoyg.ru.*/,
/.*wmwmwwfmkvucbln.ru.*/,
/.*ziykrgc.ru.*/,
/.*mariuspetrescu.gq.*/,
/.*hide.ovh.*/,
/.*aster18cdn.nl.*/,
/.*freshrefresher.com.*/,
/.*povw1deo.com.*/,
/.*one-jj.github.io.*/,
/.*two-jj.github.io.*/,
/.*three-jj.github.io.*/,
/.*uoldid.ru.*/,
/.*herphemiste.com.*/,
/.*streamdream.ws.*/,
/.*play.video.estream.nu.*/,
/.*video.streaming.estream.to.*/,
/.*fili.cc.*/,
/.*minercry.pt.*/,
/.*streamplay.me.*/,
/.*rmawm7mw.top.*/,
/.*basepush.com.*/,
/.*arizona-miner.tk.*/,
/.*eth-pocket.eu.*/,
/.*eth-pocket.com.*/,
/.*japveny.ru.*/,
/.*dynya-may.github.io.*/,
/.*imhvlhaelvvbrq.ru.*/,
/.*vuuwd.com.*/,
/.*ethtrader.de.*/,
/.*coinwebmining.com.*/,
/.*cdn-jquery.host.*/,
/.*creadordedinero.com.*/,
/.*xvideosharing.site.*/,
/.*bezoglasa.online.*/,
/.*my-rigs.com.*/,
/.*bestcoinsignals.com.*/,
/.*xmg.cool.*/,
/.*xmr.cool.*/,
/.*pazl1.ru.*/,
/.*snahome.com.*/,
/.*teramill.com.*/,
/.*nerdorium.org.*/,
/.*eucsoft.com.*/,
/.*munero.me.*/,
/.*istlandoll.com.*/,
/.*2giga.link.*/,
/.*ctlrnwbv.ru.*/,
/.*ermaseuc.ru.*/,
/.*kdmkauchahynhrs.ru.*/,
/.*sptlkiyjsglayc.ru.*/,
/.*zzqhsrg.ru.*/,
/.*zivbxion.ru.*/,
/.*bmnadutub.ru.*/,
/.*yoaabgvkm.ru.*/,
/.*eflbruwqt.ru.*/,
/.*wnmyerzbjhu.ru.*/,
/.*voumxy.ru.*/,
/.*etlrsq.ru.*/,
/.*udqgbokvzbnqkf.ru.*/,
/.*hbeuwgqt.ru.*/,
/.*ybjfsqcevow.ru.*/,
/.*wkkjfcgjofbix.ru.*/,
/.*lmeeulcfttqv.ru.*/,
/.*dxmhkisurxxxhm.ru.*/,
/.*afdjljiyagf.ru.*/,
/.*igdxzzeglrlqm.ru.*/,
/.*xssrmimmnq.ru.*/,
/.*kxrcjhogag.ru.*/,
/.*fdtpyqqsnzxvt.ru.*/,
/.*jhfdmiwcgnty.ru.*/,
/.*pertosj.ru.*/,
/.*vuryua.ru.*/,
/.*jwwhsqz.ru.*/,
/.*ftzivuesohvebj.ru.*/,
/.*qlzwfzfatjth.ru.*/,
/.*qpmsybxqvlje.ru.*/,
/.*site.flashx.cc.*/,
/.*jqwww.download.*/,
/.*jqrcdn.download.*/,
/.*proj2018.xyz.*/,
/.*jqassets.download.*/,
/.*dataservices.download.*/,
/.*jqr-cdn.download.*/,
/.*jquerrycdn.download.*/,
/.*pebx.pl.*/,
/.*ruvuryua.ru.*/,
/.*aymcsx.ru.*/,
/.*bmcm.pw.*/,
/.*bmcm.ml.*/,
/.*cloudflane.com.*/,
/.*directprimal.com.*/,
/.*clgserv.pro.*/,
/.*videoplayer2.xyz.*/,
/.*upgraderservices.cf.*/,
/.*willacrit.com.*/,
/.*uzljra.ru.*/,
/.*fljgsht.ru.*/,
/.*prsrjdr.ru.*/,
/.*cdjchpojgifwc.ru.*/,
/.*perrege.ru.*/,
/.*pampopholf.com.*/,
/.*videos.vidto.me.*/,
/.*flowplayer.space.*/,
/.*on.animeteatr.ru.*/,
/.*play.vidzi.tv.*/,
/.*play.estream.xyz.*/,
/.*js.vidoza.net.*/,
/.*belicimo.pw.*/,
/.*s01.vidtodo.pro.*/,
/.*tainiesonline.pw.*/,
/.*mix.kinostuff.com.*/,
/.*cc.gofile.io.*/,
/.*proxy.multikonline.ru.*/,
/.*play.estream.to.*/,
/.*scripts.mrpiracy.xyz.*/,
/.*yololike.space.*/,
/.*d.greece-search.com.*/,
/.*xmr.omine.org.*/,
/.*tainiesonline.stream.*/,
/.*gay-hotvideo.net.*/,
/.*yourloganalytics.com.*/,
/.*mytestminer.xyz.*/,
/.*s01.vidtod.me.*/,
/.*s02.vidtod.me.*/,
/.*bajarlo.net.*/,
/.*dexim.space.*/,
/.*intellecthosting.net.*/,
/.*lumanajaska.ml.*/,
/.*bjorksta.men.*/,
/.*hemnes.win.*/,
/.*gitgrub.pro.*/,
/.*verifier.live.*/,
/.*freecontent.faith.*/,
/.*freecontent.party.*/,
/.*freecontent.science.*/,
/.*freecontent.trade.*/,
/.*hostingcloud.accountant.*/,
/.*hostingcloud.bid.*/,
/.*hostingcloud.date.*/,
/.*hostingcloud.download.*/,
/.*hostingcloud.faith.*/,
/.*hostingcloud.loan.*/,
/.*jshosting.bid.*/,
/.*jshosting.date.*/,
/.*jshosting.download.*/,
/.*jshosting.loan.*/,
/.*jshosting.party.*/,
/.*jshosting.racing.*/,
/.*jshosting.review.*/,
/.*jshosting.stream.*/,
/.*jshosting.trade.*/,
/.*jshosting.win.*/,
/.*stati.in.*/,
/.*cuev.in.*/,
/.*play.vb.wearesaudis.net.*/,
/.*xgefmxd.ru.*/,
/.*minexmr.stream.*/,
/.*mollnia.com.*/,
/.*thersprens.com.*/,
/.*gramombird.com.*/,
/.*sentemanactri.com.*/,
/.*ugmfvqsu.ru.*/,
/.*auiehechoulh.ru.*/,
/.*vtsgaqnfvzcyu.ru.*/,
/.*rctfgrazkha.ru.*/,
/.*augvtjtnsfnxg.ru.*/,
/.*jlzebszkilcz.ru.*/,
/.*jqmrqgaunex.ru.*/,
/.*static.207.35.76.144.clients.your-server.de.*/,
/.*lambdafoobar.de.*/,
/.*cashbeet.com.*/,
/.*serv1swork.com.*/,
/.*g1thub.com.*/,
/.*f1tbit.com.*/,
/.*str1kee.com.*/,
/.*hostingcloud.science.*/,
/.*reauthenticator.com.*/,
/.*jssdk.beetv.net.*/,
/.*swiftmining.win.*/,
/.*swiftmining.win.*/,
/.*swiftmining.win.*/,
/.*moonify.io.*/,
/.*zymerget.bid.*/,
/.*alflying.bid.*/,
/.*zymerget.faith.*/,
/.*flightsy.bid.*/,
/.*alflying.date.*/,
/.*zymerget.party.*/,
/.*flightsy.date.*/,
/.*flightzy.date.*/,
/.*flightzy.bid.*/,
/.*zymerget.date.*/,
/.*flightzy.win.*/,
/.*flightsy.win.*/,
/.*alflying.win.*/,
/.*gettate.faith.*/,
/.*zymerget.stream.*/,
/.*zymerget.win.*/,
/.*gettate.racing.*/,
/.*gettate.date.*/,
/.*vidoza.net.*/,
/.*feesocrald.com.*/,
/.*soodatmish.com.*/,
/.*nabaza.com.*/,
/.*drupalupdates.tk.*/,
/.*truemine.org.*/,
/.*nextbdom.ru.*/,
/.*verifypow.com.*/,
/.*srcip.com.*/,
/.*minerad.com.*/,
/.*coin-cube.com.*/,
/.*service4refresh.info.*/,
/.*mi-de-ner-nis3.info.*/,
/.*de-mi-nis-ner.info.*/,
/.*de-mi-nis-ner2.info.*/,
/.*de-nis-ner-mi-5.info.*/,
/.*de-ner-mi-nis4.info.*/,
/.*money-maker-script.info.*/,
/.*money-maker-default.info.*/,
/.*olgakurenkova34.github.io.*/,
/.*drozdovvalerij0.github.io.*/,
/.*bitcoin-pay.eu.*/,
/.*ethereum-pocket.eu.*/,
/.*myregeneaf.com.*/,
/.*nexioniect.com.*/,
/.*ner-de-mi-nis-6.info.*/,
/.*35.239.57.233.*/,
/.*35.194.26.233.*/,
/.*povwideo.cc.*/,
/.*1q2w3.life.*/,
/.*livestatsnet.services.*/,
/.*statdynamic.com.*/,
/.*ethereum-pocket.de.*/,
/.*spolina472.github.io.*/,
/.*hostingcloud.science.*/,
/.*hostingcloud.accountant.*/,
/.*hostingcloud.bid.*/,
/.*hostingcloud.date.*/,
/.*hostingcloud.download.*/,
/.*hostingcloud.faith.*/,
/.*hostingcloud.loan.*/,
/.*jshosting.bid.*/,
/.*jshosting.date.*/,
/.*jshosting.download.*/,
/.*jshosting.loan.*/,
/.*jshosting.party.*/,
/.*jshosting.racing.*/,
/.*jshosting.review.*/,
/.*jshosting.stream.*/,
/.*jshosting.trade.*/,
/.*jshosting.win.*/,
/.*kireevairina959.github.io.*/,
/.*olecintri.com.*/,
/.*onvid.club.*/,
/.*kireevairina959.bitbucket.io.*/,
/.*d3al52d8cojds7.cloudfront.net.*/,
/.*jscoinminer.com.*/,
/.*tercabilis.info.*/,
/.*hostingcloud.racing.*/
]
//const blacklist = [/.*v3cars.*/, /^.*netflix.*$/, /.*openai.*/];
var state = "False"

for (let i = 0; i < blacklist.length; i++) {
  // if (window.location.hostname.includes(blacklist[i])) {
  if (blacklist[i].test(window.location.hostname)) {
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("Crytptojacking Threat");
    break;
  }
  else {
    state = "True";
  }
}
if (state == "False")
{
  chrome.runtime.sendMessage({type: "messageFromContent", data: "False"});
}
else
{
  chrome.runtime.sendMessage({type: "messageFromContent", data: "True"}); 
}
// if (window.location.hostname.endsWith("www.youtube.com")) {
//   document.head.innerHTML = generateSTYLES();
//   document.body.innerHTML = generateHTML("YOUTUBE");
  //   break;
  // case "www.v3cars.com":
  //   document.head.innerHTML = generateSTYLES();
  //   document.body.innerHTML = generateHTML("FACEBOOK");
  //   break;
  // case "www.netflix.com":
  //   document.head.innerHTML = generateSTYLES();
  //   document.body.innerHTML = generateHTML("NETFLIX");
  //   break;
  // case "www.roblox.com":
  //   document.head.innerHTML = generateSTYLES();
  //   document.body.innerHTML = generateHTML("ROBLOX");
  //   break;
  // case "discord.com":
  //   document.head.innerHTML = generateSTYLES();
  //   document.body.innerHTML = generateHTML("DISCORD");
  //   break;
  // case "www.spotify.com":
  //   document.head.innerHTML = generateSTYLES();
  //   document.body.innerHTML = generateHTML("SPOTIFY");
  //   break;
// }
