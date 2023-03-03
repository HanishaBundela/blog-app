import React from 'react';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import {Link} from 'react-router-dom';
const Single = () => {
    const posts = [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 2,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 3,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 4,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ];
    return(
        <div className='single'>
            <div className="content">
                <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="user">
                    <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <div className="info">
                        <span>Hanisha</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to ={`/write?edit=2`}>
                             <img src={Edit} alt="" />
                        </Link>
                        <img src= {Delete} alt="" />
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur!</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, perspiciatis. Rem libero nesciunt culpa asperiores reprehenderit, quia sed adipisci illum atque vitae explicabo sunt itaque? Est laudantium ullam molestiae soluta doloremque nam atque numquam rerum quos quidem quo dolorem voluptatibus necessitatibus expedita, deleniti totam harum nesciunt non? Qui alias rem tempora nesciunt. Vitae sequi consectetur saepe ex molestias inventore doloribus necessitatibus quas a dolores delectus, aut illo fugiat ipsam expedita. Dolorem, fugit ab placeat ut, deleniti vitae eum quibusdam iure itaque debitis, mollitia tempore impedit cum! Nobis placeat facere mollitia ducimus possimus, quo ex minima. Omnis suscipit accusamus incidunt atque, harum maxime quia rerum voluptatum, quam odit necessitatibus perspiciatis, molestias eum voluptates a maiores vel non ullam tempore ipsa dolor consectetur? Officia, quam eius! Praesentium, nemo voluptate quo maxime nulla ut neque harum possimus voluptatem reprehenderit corporis beatae atque incidunt mollitia voluptatum eos eligendi ipsam sed quasi nesciunt aspernatur voluptates. Animi eos odit repellat laborum nisi vero, nostrum consectetur repudiandae sit, doloribus fugit est neque officia itaque unde aliquam iste. Repudiandae minus, laborum hic culpa corporis libero possimus similique error necessitatibus reprehenderit! Est harum blanditiis, repudiandae quas illum omnis nam incidunt nostrum esse, id impedit, accusantium beatae quasi enim ex deleniti quo! Sed accusamus amet nostrum hic sapiente eaque perferendis rerum libero iure sit, cupiditate, fuga odio voluptatibus quas. Laboriosam repellat sed delectus ducimus, voluptas quos voluptatibus soluta asperiores reiciendis natus quae rem eaque atque molestiae maiores magnam, iste aspernatur. Magnam alias molestias distinctio ducimus voluptate, cumque, cum vel nihil totam possimus expedita? Molestiae perspiciatis unde natus vero iusto qui cumque quis eveniet officiis accusamus sequi, rem accusantium culpa voluptate facere velit, provident maiores repudiandae. Nemo, tempore! Quibusdam, impedit ab et illum doloribus facilis, numquam maxime exercitationem dolorem similique sunt sit, dicta voluptate obcaecati voluptatibus vel nulla repellendus. Quaerat, error!</p>
            </div>
            <div className="menu">
                {posts.map((post) =>(
                    <div className="post" key = {post.id}>
                        <img src={post.img} alt="" />
                        <h2>{post.title}</h2>
                        <button>Read more</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Single;