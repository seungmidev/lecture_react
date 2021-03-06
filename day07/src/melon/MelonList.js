import React from 'react';
import MelonItem from './MelonItem';
import './MelonList.css'

const MelonList = ({musics, onLike, onOpen}) => {
    return (
        <div className="MelonList">
            <table>
                <colgroup>
                    <col className="w1" />
                    <col className="w2" />
                    <col className="w3" />
                    <col className="w4" />
                    <col className="w5" />
                    <col className="w6" />
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col">순위</th>
                        <th scope="col">곡(가수)</th>
                        <th scope="col">앨범</th>
                        <th scope="col">좋아요</th>
                        <th scope="col">동영상</th>
                        <th scope="col">상승/하락</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        musics.map(music => <MelonItem key={music.rank} music={music} onLike={onLike} onOpen={onOpen} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MelonList;