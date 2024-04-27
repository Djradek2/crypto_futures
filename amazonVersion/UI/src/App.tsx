import { useState, useEffect, useRef, useReducer } from 'react';
import classNames from 'classnames';
import styles from './App.module.scss';
import mysql from 'mysql';
import {io} from 'socket.io-client';
import { socket } from './socket';

function App() {
    var test = new Date().getTime()-20000
    var [randomForUpdating, useRandom] = useState(0)
    var [lastUpdate, changelastUpdate] = useState(test)
    var [stateTimeframe, selectTimeframe] = useState("30sec")
    var [jsonStore, changeJsonStore] = useState({})

    var [firstLine, changeFirstLine] = useState({
        date: "",
        num1: "",
        num2: "",
        num3: "",
        num4: "",
        num5: "",
        num6: "",
        num7: "",
        num8: "",
        num9: "",
        num10: "",
        coin1: "",
        coin2: "",
        coin3: "",
        coin4: "",
        coin5: "",
        coin6: "",
        coin7: "",
        coin8: "",
        coin9: "",
        coin10: ""
    });
    var [secondLine, changeSecondLine] = useState({
        date: "",
        num1: "",
        num2: "",
        num3: "",
        num4: "",
        num5: "",
        num6: "",
        num7: "",
        num8: "",
        num9: "",
        num10: "",
        coin1: "",
        coin2: "",
        coin3: "",
        coin4: "",
        coin5: "",
        coin6: "",
        coin7: "",
        coin8: "",
        coin9: "",
        coin10: ""
    });
    var [thirdLine, changeThirdLine] = useState({
        date: "",
        num1: "",
        num2: "",
        num3: "",
        num4: "",
        num5: "",
        num6: "",
        num7: "",
        num8: "",
        num9: "",
        num10: "",
        coin1: "",
        coin2: "",
        coin3: "",
        coin4: "",
        coin5: "",
        coin6: "",
        coin7: "",
        coin8: "",
        coin9: "",
        coin10: ""
    });
    var [fourthLine, changeFourthLine] = useState({
        date: "",
        num1: "",
        num2: "",
        num3: "",
        num4: "",
        num5: "",
        num6: "",
        num7: "",
        num8: "",
        num9: "",
        num10: "",
        coin1: "",
        coin2: "",
        coin3: "",
        coin4: "",
        coin5: "",
        coin6: "",
        coin7: "",
        coin8: "",
        coin9: "",
        coin10: ""
    });
    var [fifthLine, changeFifthLine] = useState({
        date: "",
        num1: "",
        num2: "",
        num3: "",
        num4: "",
        num5: "",
        num6: "",
        num7: "",
        num8: "",
        num9: "",
        num10: "",
        coin1: "",
        coin2: "",
        coin3: "",
        coin4: "",
        coin5: "",
        coin6: "",
        coin7: "",
        coin8: "",
        coin9: "",
        coin10: ""
    });
    var [sixthLine, changeSixthLine] = useState({
        date: "",
        num1: "",
        num2: "",
        num3: "",
        num4: "",
        num5: "",
        num6: "",
        num7: "",
        num8: "",
        num9: "",
        num10: "",
        coin1: "",
        coin2: "",
        coin3: "",
        coin4: "",
        coin5: "",
        coin6: "",
        coin7: "",
        coin8: "",
        coin9: "",
        coin10: ""
    });
    var [seventhLine, changeSeventhLine] = useState({
        date: "",
        num1: "",
        num2: "",
        num3: "",
        num4: "",
        num5: "",
        num6: "",
        num7: "",
        num8: "",
        num9: "",
        num10: "",
        coin1: "",
        coin2: "",
        coin3: "",
        coin4: "",
        coin5: "",
        coin6: "",
        coin7: "",
        coin8: "",
        coin9: "",
        coin10: ""
    });
    var [eigthLine, changeEigthLine] = useState({
        date: "",
        num1: "",
        num2: "",
        num3: "",
        num4: "",
        num5: "",
        num6: "",
        num7: "",
        num8: "",
        num9: "",
        num10: "",
        coin1: "",
        coin2: "",
        coin3: "",
        coin4: "",
        coin5: "",
        coin6: "",
        coin7: "",
        coin8: "",
        coin9: "",
        coin10: ""
    });
    var [ninthLine, changeNinthLine] = useState({
        date: "",
        num1: "",
        num2: "",
        num3: "",
        num4: "",
        num5: "",
        num6: "",
        num7: "",
        num8: "",
        num9: "",
        num10: "",
        coin1: "",
        coin2: "",
        coin3: "",
        coin4: "",
        coin5: "",
        coin6: "",
        coin7: "",
        coin8: "",
        coin9: "",
        coin10: ""
    });
    var [tenthLine, changeTenthLine] = useState({
        date: "",
        num1: "",
        num2: "",
        num3: "",
        num4: "",
        num5: "",
        num6: "",
        num7: "",
        num8: "",
        num9: "",
        num10: "",
        coin1: "",
        coin2: "",
        coin3: "",
        coin4: "",
        coin5: "",
        coin6: "",
        coin7: "",
        coin8: "",
        coin9: "",
        coin10: ""
    });
    var [leaderBoard, changeLeaderBoard] = useState({
        coin1: "",
        coin2: "",
        coin3: "",
        coin4: "",
        coin5: "",
        count1: "",
        count2: "",
        count3: "",
        count4: "",
        count5: ""        
    });

    useEffect(() => {
        function updateTables(){
            socket.emit("request" + stateTimeframe);
            socket.on("dataSent", (data) => {
                changeJsonStore(data)
                changeFirstLine({
                    date: data[0].date.slice(11,19),
                    num1: data[0].num1,
                    num2: data[0].num2,
                    num3: data[0].num3,
                    num4: data[0].num4,
                    num5: data[0].num5,
                    num6: data[0].num6,
                    num7: data[0].num7,
                    num8: data[0].num8,
                    num9: data[0].num9,
                    num10: data[0].num10,
                    coin1: data[0].coin1,
                    coin2: data[0].coin2,
                    coin3: data[0].coin3,
                    coin4: data[0].coin4,
                    coin5: data[0].coin5,
                    coin6: data[0].coin6,
                    coin7: data[0].coin7,
                    coin8: data[0].coin8,
                    coin9: data[0].coin9,
                    coin10: data[0].coin10
                })
                changeSecondLine({
                    date: data[1].date.slice(11,19),
                    num1: data[1].num1,
                    num2: data[1].num2,
                    num3: data[1].num3,
                    num4: data[1].num4,
                    num5: data[1].num5,
                    num6: data[1].num6,
                    num7: data[1].num7,
                    num8: data[1].num8,
                    num9: data[1].num9,
                    num10: data[1].num10,
                    coin1: data[1].coin1,
                    coin2: data[1].coin2,
                    coin3: data[1].coin3,
                    coin4: data[1].coin4,
                    coin5: data[1].coin5,
                    coin6: data[1].coin6,
                    coin7: data[1].coin7,
                    coin8: data[1].coin8,
                    coin9: data[1].coin9,
                    coin10: data[1].coin10
                })
                changeThirdLine({
                    date: data[2].date.slice(11,19),
                    num1: data[2].num1,
                    num2: data[2].num2,
                    num3: data[2].num3,
                    num4: data[2].num4,
                    num5: data[2].num5,
                    num6: data[2].num6,
                    num7: data[2].num7,
                    num8: data[2].num8,
                    num9: data[2].num9,
                    num10: data[2].num10,
                    coin1: data[2].coin1,
                    coin2: data[2].coin2,
                    coin3: data[2].coin3,
                    coin4: data[2].coin4,
                    coin5: data[2].coin5,
                    coin6: data[2].coin6,
                    coin7: data[2].coin7,
                    coin8: data[2].coin8,
                    coin9: data[2].coin9,
                    coin10: data[2].coin10
                })
                changeFourthLine({
                    date: data[3].date.slice(11,19),
                    num1: data[3].num1,
                    num2: data[3].num2,
                    num3: data[3].num3,
                    num4: data[3].num4,
                    num5: data[3].num5,
                    num6: data[3].num6,
                    num7: data[3].num7,
                    num8: data[3].num8,
                    num9: data[3].num9,
                    num10: data[3].num10,
                    coin1: data[3].coin1,
                    coin2: data[3].coin2,
                    coin3: data[3].coin3,
                    coin4: data[3].coin4,
                    coin5: data[3].coin5,
                    coin6: data[3].coin6,
                    coin7: data[3].coin7,
                    coin8: data[3].coin8,
                    coin9: data[3].coin9,
                    coin10: data[3].coin10
                })
                changeFifthLine({
                    date: data[4].date.slice(11,19),
                    num1: data[4].num1,
                    num2: data[4].num2,
                    num3: data[4].num3,
                    num4: data[4].num4,
                    num5: data[4].num5,
                    num6: data[4].num6,
                    num7: data[4].num7,
                    num8: data[4].num8,
                    num9: data[4].num9,
                    num10: data[4].num10,
                    coin1: data[4].coin1,
                    coin2: data[4].coin2,
                    coin3: data[4].coin3,
                    coin4: data[4].coin4,
                    coin5: data[4].coin5,
                    coin6: data[4].coin6,
                    coin7: data[4].coin7,
                    coin8: data[4].coin8,
                    coin9: data[4].coin9,
                    coin10: data[4].coin10
                })
                changeSixthLine({
                    date: data[5].date.slice(11,19),
                    num1: data[5].num1,
                    num2: data[5].num2,
                    num3: data[5].num3,
                    num4: data[5].num4,
                    num5: data[5].num5,
                    num6: data[5].num6,
                    num7: data[5].num7,
                    num8: data[5].num8,
                    num9: data[5].num9,
                    num10: data[5].num10,
                    coin1: data[5].coin1,
                    coin2: data[5].coin2,
                    coin3: data[5].coin3,
                    coin4: data[5].coin4,
                    coin5: data[5].coin5,
                    coin6: data[5].coin6,
                    coin7: data[5].coin7,
                    coin8: data[5].coin8,
                    coin9: data[5].coin9,
                    coin10: data[5].coin10
                })
                changeSeventhLine({
                    date: data[6].date.slice(11,19),
                    num1: data[6].num1,
                    num2: data[6].num2,
                    num3: data[6].num3,
                    num4: data[6].num4,
                    num5: data[6].num5,
                    num6: data[6].num6,
                    num7: data[6].num7,
                    num8: data[6].num8,
                    num9: data[6].num9,
                    num10: data[6].num10,
                    coin1: data[6].coin1,
                    coin2: data[6].coin2,
                    coin3: data[6].coin3,
                    coin4: data[6].coin4,
                    coin5: data[6].coin5,
                    coin6: data[6].coin6,
                    coin7: data[6].coin7,
                    coin8: data[6].coin8,
                    coin9: data[6].coin9,
                    coin10: data[6].coin10
                })
                changeEigthLine({
                    date: data[7].date.slice(11,19),
                    num1: data[7].num1,
                    num2: data[7].num2,
                    num3: data[7].num3,
                    num4: data[7].num4,
                    num5: data[7].num5,
                    num6: data[7].num6,
                    num7: data[7].num7,
                    num8: data[7].num8,
                    num9: data[7].num9,
                    num10: data[7].num10,
                    coin1: data[7].coin1,
                    coin2: data[7].coin2,
                    coin3: data[7].coin3,
                    coin4: data[7].coin4,
                    coin5: data[7].coin5,
                    coin6: data[7].coin6,
                    coin7: data[7].coin7,
                    coin8: data[7].coin8,
                    coin9: data[7].coin9,
                    coin10: data[7].coin10
                })
                changeNinthLine({
                    date: data[8].date.slice(11,19),
                    num1: data[8].num1,
                    num2: data[8].num2,
                    num3: data[8].num3,
                    num4: data[8].num4,
                    num5: data[8].num5,
                    num6: data[8].num6,
                    num7: data[8].num7,
                    num8: data[8].num8,
                    num9: data[8].num9,
                    num10: data[8].num10,
                    coin1: data[8].coin1,
                    coin2: data[8].coin2,
                    coin3: data[8].coin3,
                    coin4: data[8].coin4,
                    coin5: data[8].coin5,
                    coin6: data[8].coin6,
                    coin7: data[8].coin7,
                    coin8: data[8].coin8,
                    coin9: data[8].coin9,
                    coin10: data[8].coin10
                })
                changeTenthLine({
                    date: data[9].date.slice(11,19),
                    num1: data[9].num1,
                    num2: data[9].num2,
                    num3: data[9].num3,
                    num4: data[9].num4,
                    num5: data[9].num5,
                    num6: data[9].num6,
                    num7: data[9].num7,
                    num8: data[9].num8,
                    num9: data[9].num9,
                    num10: data[9].num10,
                    coin1: data[9].coin1,
                    coin2: data[9].coin2,
                    coin3: data[9].coin3,
                    coin4: data[9].coin4,
                    coin5: data[9].coin5,
                    coin6: data[9].coin6,
                    coin7: data[9].coin7,
                    coin8: data[9].coin8,
                    coin9: data[9].coin9,
                    coin10: data[9].coin10
                })
            });
        }
        function updateLeaderBoard(){
            try{
                const coinCounter = new Map();
                for(var y = 0; y<10; y++){
                    for (var i = 1; i < 11; i++){ 
                        var getCoin = "coin" + i 
                        if(coinCounter.has(jsonStore[y][getCoin])){
                            coinCounter.set(jsonStore[y][getCoin], (coinCounter.get(jsonStore[y][getCoin]))+(-i+11));
                        } else{
                            coinCounter.set(jsonStore[y][getCoin], -i+11)
                        }
                    }
                }
                const sortedMap = new Map([...coinCounter.entries()].sort((a, b) => b[1] - a[1]))
                const iterateMap = sortedMap.entries();
                const loadup1 = iterateMap.next()
                const loadup2 = iterateMap.next()
                const loadup3 = iterateMap.next()
                const loadup4 = iterateMap.next()
                const loadup5 = iterateMap.next()
                changeLeaderBoard({
                    coin1: loadup1.value[0],
                    count1: loadup1.value[1],
                    coin2: loadup2.value[0],
                    count2: loadup2.value[1],
                    coin3: loadup3.value[0],
                    count3: loadup3.value[1],
                    coin4: loadup4.value[0],
                    count4: loadup4.value[1],
                    coin5: loadup5.value[0],
                    count5: loadup5.value[1]
                })

            } catch {}
        }
        if((stateTimeframe == "30sec" || stateTimeframe == "1min") && lastUpdate+3000 < new Date().getTime()){
            updateTables()
            updateLeaderBoard()
            changelastUpdate(new Date().getTime())
        } else if(lastUpdate+3000 < new Date().getTime()){
            updateTables()
            updateLeaderBoard()
            changelastUpdate(new Date().getTime())            
        }
        const interval = setInterval(() => {
            updateLeaderBoard()
            useRandom(Math.random());
          }, 80);
        return () => clearInterval(interval);
    });

    return (
        <div className={styles.App}>
            <div className={styles.Leaderboard}>
                <div className={styles.LeaderText}>Most volatile in timeframe:</div>
                <div>
                    <div className={styles.LeaderCoin}>{leaderBoard.coin1}</div>
                    <div className={styles.LeaderValue}>{leaderBoard.count1}</div>
                </div>
                <div>
                    <div className={styles.LeaderCoin}>{leaderBoard.coin2}</div>
                    <div className={styles.LeaderValue}>{leaderBoard.count2}</div>
                </div>
                <div>
                    <div className={styles.LeaderCoin}>{leaderBoard.coin3}</div>
                    <div className={styles.LeaderValue}>{leaderBoard.count3}</div>
                </div>
                <div>
                    <div className={styles.LeaderCoin}>{leaderBoard.coin4}</div>
                    <div className={styles.LeaderValue}>{leaderBoard.count4}</div>
                </div>
                <div>
                    <div className={styles.LeaderCoin}>{leaderBoard.coin5}</div>
                    <div className={styles.LeaderValue}>{leaderBoard.count5}</div>
                </div>
            </div>
            <div className={styles.Select}>
                <div className={styles.SetUp}>
                    <button className={stateTimeframe === '30sec' ? styles.topTimeFrameSelected : styles.topTimeFrame} onClick={() => {changelastUpdate(new Date().getTime()-20000);selectTimeframe("30sec")}}>30s</button>
                    <button className={stateTimeframe === '1min' ? styles.topTimeFrameSelected : styles.topTimeFrame} onClick={() => {changelastUpdate(new Date().getTime()-20000);selectTimeframe("1min")}}>1min</button>
                    <button className={stateTimeframe === '2min' ? styles.topTimeFrameSelected : styles.topTimeFrame} onClick={() => {changelastUpdate(new Date().getTime()-20000);selectTimeframe("2min")}}>2min</button>
                    <button className={stateTimeframe === '3min' ? styles.topTimeFrameSelected : styles.topTimeFrame} onClick={() => {changelastUpdate(new Date().getTime()-20000);selectTimeframe("3min")}}>3min</button>
                    <div className={styles.invis}></div>
                </div>
                <div className={styles.Set}>
                    <div className={styles.invis}></div>
                    <button className={stateTimeframe === '5min' ? styles.botTimeFrameSelected : styles.botTimeFrame} onClick={() => {changelastUpdate(new Date().getTime()-20000);selectTimeframe("5min")}}>5min</button>
                    <button className={stateTimeframe === '10min' ? styles.botTimeFrameSelected : styles.botTimeFrame} onClick={() => {changelastUpdate(new Date().getTime()-20000);selectTimeframe("10min")}}>10min</button>
                    <button className={stateTimeframe === '15min' ? styles.botTimeFrameSelected : styles.botTimeFrame} onClick={() => {changelastUpdate(new Date().getTime()-20000);selectTimeframe("15min")}}>15min</button>
                    <button className={stateTimeframe === '30min' ? styles.botTimeFrameSelected : styles.botTimeFrame} onClick={() => {changelastUpdate(new Date().getTime()-20000);selectTimeframe("30min")}}>30min</button>
                </div>
            </div>
            <div className={styles.Data}>
                <tbody>
                    <tr>
                        <td className = {styles.less}>{firstLine.date}</td>
                        <td>{firstLine.num1} <br></br> <a href={"https://www.binance.com/cs/futures/" + firstLine.coin1}>{firstLine.coin1}</a></td>
                        <td>{firstLine.num2} <br></br> <a href={"https://www.binance.com/cs/futures/" + firstLine.coin2}>{firstLine.coin2}</a></td>
                        <td>{firstLine.num3} <br></br> <a href={"https://www.binance.com/cs/futures/" + firstLine.coin3}>{firstLine.coin3}</a></td>
                        <td>{firstLine.num4} <br></br> <a href={"https://www.binance.com/cs/futures/" + firstLine.coin4}>{firstLine.coin4}</a></td>
                        <td>{firstLine.num5} <br></br> <a href={"https://www.binance.com/cs/futures/" + firstLine.coin5}>{firstLine.coin5}</a></td>
                        <td>{firstLine.num6} <br></br> <a href={"https://www.binance.com/cs/futures/" + firstLine.coin6}>{firstLine.coin6}</a></td>
                        <td>{firstLine.num7} <br></br> <a href={"https://www.binance.com/cs/futures/" + firstLine.coin7}>{firstLine.coin7}</a></td>
                        <td>{firstLine.num8} <br></br> <a href={"https://www.binance.com/cs/futures/" + firstLine.coin8}>{firstLine.coin8}</a></td>
                        <td>{firstLine.num9} <br></br> <a href={"https://www.binance.com/cs/futures/" + firstLine.coin9}>{firstLine.coin9}</a></td>
                        <td>{firstLine.num10} <br></br> <a href={"https://www.binance.com/cs/futures/" + firstLine.coin10}>{firstLine.coin10}</a></td>
                    </tr>
                    <tr>
                        <td className = {styles.less}>{secondLine.date}</td>
                        <td>{secondLine.num1} <br></br> <a href={"https://www.binance.com/cs/futures/" + secondLine.coin1}>{secondLine.coin1}</a></td>
                        <td>{secondLine.num2} <br></br> <a href={"https://www.binance.com/cs/futures/" + secondLine.coin2}>{secondLine.coin2}</a></td>
                        <td>{secondLine.num3} <br></br> <a href={"https://www.binance.com/cs/futures/" + secondLine.coin3}>{secondLine.coin3}</a></td>
                        <td>{secondLine.num4} <br></br> <a href={"https://www.binance.com/cs/futures/" + secondLine.coin4}>{secondLine.coin4}</a></td>
                        <td>{secondLine.num5} <br></br> <a href={"https://www.binance.com/cs/futures/" + secondLine.coin5}>{secondLine.coin5}</a></td>
                        <td>{secondLine.num6} <br></br> <a href={"https://www.binance.com/cs/futures/" + secondLine.coin6}>{secondLine.coin6}</a></td>
                        <td>{secondLine.num7} <br></br> <a href={"https://www.binance.com/cs/futures/" + secondLine.coin7}>{secondLine.coin7}</a></td>
                        <td>{secondLine.num8} <br></br> <a href={"https://www.binance.com/cs/futures/" + secondLine.coin8}>{secondLine.coin8}</a></td>
                        <td>{secondLine.num9} <br></br> <a href={"https://www.binance.com/cs/futures/" + secondLine.coin9}>{secondLine.coin9}</a></td>
                        <td>{secondLine.num10} <br></br> <a href={"https://www.binance.com/cs/futures/" + secondLine.coin10}>{secondLine.coin10}</a></td>                     
                    </tr>
                    <tr>
                        <td className = {styles.less}>{thirdLine.date}</td>
                        <td>{thirdLine.num1} <br></br> <a href={"https://www.binance.com/cs/futures/" + thirdLine.coin1}>{thirdLine.coin1}</a></td>
                        <td>{thirdLine.num2} <br></br> <a href={"https://www.binance.com/cs/futures/" + thirdLine.coin2}>{thirdLine.coin2}</a></td>
                        <td>{thirdLine.num3} <br></br> <a href={"https://www.binance.com/cs/futures/" + thirdLine.coin3}>{thirdLine.coin3}</a></td>
                        <td>{thirdLine.num4} <br></br> <a href={"https://www.binance.com/cs/futures/" + thirdLine.coin4}>{thirdLine.coin4}</a></td>
                        <td>{thirdLine.num5} <br></br> <a href={"https://www.binance.com/cs/futures/" + thirdLine.coin5}>{thirdLine.coin5}</a></td>
                        <td>{thirdLine.num6} <br></br> <a href={"https://www.binance.com/cs/futures/" + thirdLine.coin6}>{thirdLine.coin6}</a></td>
                        <td>{thirdLine.num7} <br></br> <a href={"https://www.binance.com/cs/futures/" + thirdLine.coin7}>{thirdLine.coin7}</a></td>
                        <td>{thirdLine.num8} <br></br> <a href={"https://www.binance.com/cs/futures/" + thirdLine.coin8}>{thirdLine.coin8}</a></td>
                        <td>{thirdLine.num9} <br></br> <a href={"https://www.binance.com/cs/futures/" + thirdLine.coin9}>{thirdLine.coin9}</a></td>
                        <td>{thirdLine.num10} <br></br> <a href={"https://www.binance.com/cs/futures/" + thirdLine.coin10}>{thirdLine.coin10}</a></td>                       
                    </tr>
                    <tr>
                        <td className = {styles.less}>{fourthLine.date}</td>
                        <td>{fourthLine.num1} <br></br> <a href={"https://www.binance.com/cs/futures/" + fourthLine.coin1}>{fourthLine.coin1}</a></td>
                        <td>{fourthLine.num2} <br></br> <a href={"https://www.binance.com/cs/futures/" + fourthLine.coin2}>{fourthLine.coin2}</a></td>
                        <td>{fourthLine.num3} <br></br> <a href={"https://www.binance.com/cs/futures/" + fourthLine.coin3}>{fourthLine.coin3}</a></td>
                        <td>{fourthLine.num4} <br></br> <a href={"https://www.binance.com/cs/futures/" + fourthLine.coin4}>{fourthLine.coin4}</a></td>
                        <td>{fourthLine.num5} <br></br> <a href={"https://www.binance.com/cs/futures/" + fourthLine.coin5}>{fourthLine.coin5}</a></td>
                        <td>{fourthLine.num6} <br></br> <a href={"https://www.binance.com/cs/futures/" + fourthLine.coin6}>{fourthLine.coin6}</a></td>
                        <td>{fourthLine.num7} <br></br> <a href={"https://www.binance.com/cs/futures/" + fourthLine.coin7}>{fourthLine.coin7}</a></td>
                        <td>{fourthLine.num8} <br></br> <a href={"https://www.binance.com/cs/futures/" + fourthLine.coin8}>{fourthLine.coin8}</a></td>
                        <td>{fourthLine.num9} <br></br> <a href={"https://www.binance.com/cs/futures/" + fourthLine.coin9}>{fourthLine.coin9}</a></td>
                        <td>{fourthLine.num10} <br></br> <a href={"https://www.binance.com/cs/futures/" + fourthLine.coin10}>{fourthLine.coin10}</a></td>                     
                    </tr>
                    <tr>
                        <td className = {styles.less}>{fifthLine.date}</td>
                        <td>{fifthLine.num1} <br></br> <a href={"https://www.binance.com/cs/futures/" + fifthLine.coin1}>{fifthLine.coin1}</a></td>
                        <td>{fifthLine.num2} <br></br> <a href={"https://www.binance.com/cs/futures/" + fifthLine.coin2}>{fifthLine.coin2}</a></td>
                        <td>{fifthLine.num3} <br></br> <a href={"https://www.binance.com/cs/futures/" + fifthLine.coin3}>{fifthLine.coin3}</a></td>
                        <td>{fifthLine.num4} <br></br> <a href={"https://www.binance.com/cs/futures/" + fifthLine.coin4}>{fifthLine.coin4}</a></td>
                        <td>{fifthLine.num5} <br></br> <a href={"https://www.binance.com/cs/futures/" + fifthLine.coin5}>{fifthLine.coin5}</a></td>
                        <td>{fifthLine.num6} <br></br> <a href={"https://www.binance.com/cs/futures/" + fifthLine.coin6}>{fifthLine.coin6}</a></td>
                        <td>{fifthLine.num7} <br></br> <a href={"https://www.binance.com/cs/futures/" + fifthLine.coin7}>{fifthLine.coin7}</a></td>
                        <td>{fifthLine.num8} <br></br> <a href={"https://www.binance.com/cs/futures/" + fifthLine.coin8}>{fifthLine.coin8}</a></td>
                        <td>{fifthLine.num9} <br></br> <a href={"https://www.binance.com/cs/futures/" + fifthLine.coin9}>{fifthLine.coin9}</a></td>
                        <td>{fifthLine.num10} <br></br> <a href={"https://www.binance.com/cs/futures/" + fifthLine.coin10}>{fifthLine.coin10}</a></td>                      
                    </tr>
                    <tr>
                        <td className = {styles.less}>{sixthLine.date}</td>
                        <td>{sixthLine.num1} <br></br> <a href={"https://www.binance.com/cs/futures/" + sixthLine.coin1}>{sixthLine.coin1}</a></td>
                        <td>{sixthLine.num2} <br></br> <a href={"https://www.binance.com/cs/futures/" + sixthLine.coin2}>{sixthLine.coin2}</a></td>
                        <td>{sixthLine.num3} <br></br> <a href={"https://www.binance.com/cs/futures/" + sixthLine.coin3}>{sixthLine.coin3}</a></td>
                        <td>{sixthLine.num4} <br></br> <a href={"https://www.binance.com/cs/futures/" + sixthLine.coin4}>{sixthLine.coin4}</a></td>
                        <td>{sixthLine.num5} <br></br> <a href={"https://www.binance.com/cs/futures/" + sixthLine.coin5}>{sixthLine.coin5}</a></td>
                        <td>{sixthLine.num6} <br></br> <a href={"https://www.binance.com/cs/futures/" + sixthLine.coin6}>{sixthLine.coin6}</a></td>
                        <td>{sixthLine.num7} <br></br> <a href={"https://www.binance.com/cs/futures/" + sixthLine.coin7}>{sixthLine.coin7}</a></td>
                        <td>{sixthLine.num8} <br></br> <a href={"https://www.binance.com/cs/futures/" + sixthLine.coin8}>{sixthLine.coin8}</a></td>
                        <td>{sixthLine.num9} <br></br> <a href={"https://www.binance.com/cs/futures/" + sixthLine.coin9}>{sixthLine.coin9}</a></td>
                        <td>{sixthLine.num10} <br></br> <a href={"https://www.binance.com/cs/futures/" + sixthLine.coin10}>{sixthLine.coin10}</a></td>                       
                    </tr>
                    <tr>
                        <td className = {styles.less}>{seventhLine.date}</td>
                        <td>{seventhLine.num1} <br></br> <a href={"https://www.binance.com/cs/futures/" + seventhLine.coin1}>{seventhLine.coin1}</a></td>
                        <td>{seventhLine.num2} <br></br> <a href={"https://www.binance.com/cs/futures/" + seventhLine.coin2}>{seventhLine.coin2}</a></td>
                        <td>{seventhLine.num3} <br></br> <a href={"https://www.binance.com/cs/futures/" + seventhLine.coin3}>{seventhLine.coin3}</a></td>
                        <td>{seventhLine.num4} <br></br> <a href={"https://www.binance.com/cs/futures/" + seventhLine.coin4}>{seventhLine.coin4}</a></td>
                        <td>{seventhLine.num5} <br></br> <a href={"https://www.binance.com/cs/futures/" + seventhLine.coin5}>{seventhLine.coin5}</a></td>
                        <td>{seventhLine.num6} <br></br> <a href={"https://www.binance.com/cs/futures/" + seventhLine.coin6}>{seventhLine.coin6}</a></td>
                        <td>{seventhLine.num7} <br></br> <a href={"https://www.binance.com/cs/futures/" + seventhLine.coin7}>{seventhLine.coin7}</a></td>
                        <td>{seventhLine.num8} <br></br> <a href={"https://www.binance.com/cs/futures/" + seventhLine.coin8}>{seventhLine.coin8}</a></td>
                        <td>{seventhLine.num9} <br></br> <a href={"https://www.binance.com/cs/futures/" + seventhLine.coin9}>{seventhLine.coin9}</a></td>
                        <td>{seventhLine.num10} <br></br> <a href={"https://www.binance.com/cs/futures/" + seventhLine.coin10}>{seventhLine.coin10}</a></td>                     
                    </tr>
                    <tr>
                        <td className = {styles.less}>{eigthLine.date}</td>
                        <td>{eigthLine.num1} <br></br> <a href={"https://www.binance.com/cs/futures/" + eigthLine.coin1}>{eigthLine.coin1}</a></td>
                        <td>{eigthLine.num2} <br></br> <a href={"https://www.binance.com/cs/futures/" + eigthLine.coin2}>{eigthLine.coin2}</a></td>
                        <td>{eigthLine.num3} <br></br> <a href={"https://www.binance.com/cs/futures/" + eigthLine.coin3}>{eigthLine.coin3}</a></td>
                        <td>{eigthLine.num4} <br></br> <a href={"https://www.binance.com/cs/futures/" + eigthLine.coin4}>{eigthLine.coin4}</a></td>
                        <td>{eigthLine.num5} <br></br> <a href={"https://www.binance.com/cs/futures/" + eigthLine.coin5}>{eigthLine.coin5}</a></td>
                        <td>{eigthLine.num6} <br></br> <a href={"https://www.binance.com/cs/futures/" + eigthLine.coin6}>{eigthLine.coin6}</a></td>
                        <td>{eigthLine.num7} <br></br> <a href={"https://www.binance.com/cs/futures/" + eigthLine.coin7}>{eigthLine.coin7}</a></td>
                        <td>{eigthLine.num8} <br></br> <a href={"https://www.binance.com/cs/futures/" + eigthLine.coin8}>{eigthLine.coin8}</a></td>
                        <td>{eigthLine.num9} <br></br> <a href={"https://www.binance.com/cs/futures/" + eigthLine.coin9}>{eigthLine.coin9}</a></td>
                        <td>{eigthLine.num10} <br></br> <a href={"https://www.binance.com/cs/futures/" + eigthLine.coin10}>{eigthLine.coin10}</a></td>                   
                    </tr>
                    <tr>
                        <td className = {styles.less}>{ninthLine.date}</td>
                        <td>{ninthLine.num1} <br></br> <a href={"https://www.binance.com/cs/futures/" + ninthLine.coin1}>{ninthLine.coin1}</a></td>
                        <td>{ninthLine.num2} <br></br> <a href={"https://www.binance.com/cs/futures/" + ninthLine.coin2}>{ninthLine.coin2}</a></td>
                        <td>{ninthLine.num3} <br></br> <a href={"https://www.binance.com/cs/futures/" + ninthLine.coin3}>{ninthLine.coin3}</a></td>
                        <td>{ninthLine.num4} <br></br> <a href={"https://www.binance.com/cs/futures/" + ninthLine.coin4}>{ninthLine.coin4}</a></td>
                        <td>{ninthLine.num5} <br></br> <a href={"https://www.binance.com/cs/futures/" + ninthLine.coin5}>{ninthLine.coin5}</a></td>
                        <td>{ninthLine.num6} <br></br> <a href={"https://www.binance.com/cs/futures/" + ninthLine.coin6}>{ninthLine.coin6}</a></td>
                        <td>{ninthLine.num7} <br></br> <a href={"https://www.binance.com/cs/futures/" + ninthLine.coin7}>{ninthLine.coin7}</a></td>
                        <td>{ninthLine.num8} <br></br> <a href={"https://www.binance.com/cs/futures/" + ninthLine.coin8}>{ninthLine.coin8}</a></td>
                        <td>{ninthLine.num9} <br></br> <a href={"https://www.binance.com/cs/futures/" + ninthLine.coin9}>{ninthLine.coin9}</a></td>
                        <td>{ninthLine.num10} <br></br> <a href={"https://www.binance.com/cs/futures/" + ninthLine.coin10}>{ninthLine.coin10}</a></td>                     
                    </tr>
                    <tr>
                        <td className = {styles.less}>{tenthLine.date}</td>
                        <td>{tenthLine.num1} <br></br> <a href={"https://www.binance.com/cs/futures/" + tenthLine.coin1}>{tenthLine.coin1}</a></td>
                        <td>{tenthLine.num2} <br></br> <a href={"https://www.binance.com/cs/futures/" + tenthLine.coin2}>{tenthLine.coin2}</a></td>
                        <td>{tenthLine.num3} <br></br> <a href={"https://www.binance.com/cs/futures/" + tenthLine.coin3}>{tenthLine.coin3}</a></td>
                        <td>{tenthLine.num4} <br></br> <a href={"https://www.binance.com/cs/futures/" + tenthLine.coin4}>{tenthLine.coin4}</a></td>
                        <td>{tenthLine.num5} <br></br> <a href={"https://www.binance.com/cs/futures/" + tenthLine.coin5}>{tenthLine.coin5}</a></td>
                        <td>{tenthLine.num6} <br></br> <a href={"https://www.binance.com/cs/futures/" + tenthLine.coin6}>{tenthLine.coin6}</a></td>
                        <td>{tenthLine.num7} <br></br> <a href={"https://www.binance.com/cs/futures/" + tenthLine.coin7}>{tenthLine.coin7}</a></td>
                        <td>{tenthLine.num8} <br></br> <a href={"https://www.binance.com/cs/futures/" + tenthLine.coin8}>{tenthLine.coin8}</a></td>
                        <td>{tenthLine.num9} <br></br> <a href={"https://www.binance.com/cs/futures/" + tenthLine.coin9}>{tenthLine.coin9}</a></td>
                        <td>{tenthLine.num10} <br></br> <a href={"https://www.binance.com/cs/futures/" + tenthLine.coin10}>{tenthLine.coin10}</a></td>                       
                    </tr>
                </tbody>
            </div>
        </div>
    );
}

export default App;
