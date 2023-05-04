import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import { getApi } from "../api/Api";
import { useParams } from "react-router-dom";
function Single() {
  const [blog, setBlog] = useState("");

  let { id } = useParams();

  const fetchSinglePost = async () => {
    // console.log(id);
const url = `/api/posts/${id}`
    await getApi
      .get(url)

      .then((res) => {
        // console.log(res.data);
        setBlog(res.data);
      })
      .catch(() => {
        alert("Error fetching Post..");
      });
  };
  useEffect(() => {
    fetchSinglePost();
  }, [id]);

  // demo data
  // const demo = {
  //   id: 1,
  //   title: "This is my first blog on how to write readable code.",
  //   author: "Cleopatra Anita",
  //   author_img:
  //     "https://images.unsplash.com/photo-1629747387925-6905ff5a558a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG1lbGFuaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //   body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec suscipit enim. Phasellus malesuada nibh tortor, eu facilisis nisi suscipit at. Curabitur at tellus lorem. Pellentesque varius laoreet enim vel rhoncus. Aliquam consectetur enim quis augue maximus mollis placerat ac purus. Aenean quis enim et sem pulvinar dictum nec sed lacus. Mauris facilisis ante eget turpis tincidunt, iaculis dictum turpis tempor. Phasellus in augue at ligula luctus semper. Sed vulputate elit ac ex sodales, consequat congue magna eleifend. Cras cursus finibus ligula interdum venenatis. Praesent non nisl vel sapien gravida viverra. Quisque tincidunt justo sit amet ullamcorper dictum. Phasellus ante ex, varius non est non, malesuada condimentum metus. Suspendisse interdum, eros et gravida consequat, justo tellus dignissim sem, eu tincidunt turpis tortor ut eros. Curabitur dui arcu, efficitur sit amet nisl quis, luctus condimentum ex. Phasellus enim sapien, pharetra id risus in, rhoncus dapibus ipsum. Curabitur ac justo neque. Nam maximus lacus quis erat pellentesque maximus. Suspendisse ac commodo odio. Proin eget ligula gravida, sodales dui id, consectetur eros. Cras accumsan nisi id arcu tempor ornare. Phasellus nec augue ex. Nullam vitae ullamcorper odio. Integer efficitur rutrum orci vitae consectetur. Suspendisse potenti. Duis non diam sapien. Praesent pharetra leo ac dolor sollicitudin, ac tincidunt massa pharetra. Nunc lacus felis, commodo sed fringilla eu, hendrerit sit amet lorem. Quisque blandit aliquet bibendum. Aenean elit enim, placerat id ultrices ut, rutrum a felis. Nunc ornare ipsum id diam sagittis, in sollicitudin lorem iaculis. Nulla dui felis, viverra mollis tellus sit amet, condimentum iaculis lorem. Vivamus fringilla pellentesque mi sed varius. Fusce ultrices efficitur mauris, non lacinia est placerat at. Ut risus nisi, gravida vel volutpat non, lacinia non ante. Sed posuere, tortor a laoreet scelerisque, magna diam interdum ipsum, non luctus magna urna sit amet odio. Sed viverra orci quis velit consequat, in ornare orci maximus. Etiam dapibus rhoncus ante, eu lacinia purus. Donec odio dolor, varius non lacinia nec, cursus quis velit. Etiam nec tellus quis ante tempus gravida nec non lacus. Nam fermentum rhoncus justo quis maximus. Donec ante libero, interdum in felis ac, hendrerit convallis dolor. Suspendisse pharetra magna vel lacus vestibulum tristique in sed mauris. Phasellus massa erat, malesuada sed faucibus quis, ultrices nec velit. Fusce a viverra neque, et egestas turpis. Nullam tincidunt maximus iaculis. Maecenas vitae odio eget mi lobortis eleifend ac id metus. Aenean non elit vel orci faucibus sodales nec quis enim. In nisl enim, pellentesque at ante rutrum, hendrerit feugiat purus. Suspendisse potenti. Donec et sollicitudin magna, ac congue dui. Phasellus vitae mi dapibus, ultrices metus quis, tincidunt neque. Vestibulum non magna sit amet sem hendrerit imperdiet sed at nulla. Proin varius massa in sapien interdum, vitae mattis nisl efficitur. Mauris lectus purus, commodo aliquam mollis in, accumsan vitae felis. Nam tortor elit, bibendum et viverra a, mollis a velit. Donec sit amet lacinia augue, in consectetur tortor. Nullam lobortis, purus quis consectetur venenatis, nibh urna mattis lectus, ut fermentum metus ante vel risus. Nunc quis molestie massa.",
  //   image:
  //     "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  //   created_at: "2023-04-15",
  // };

  return (
    <div className="container">
      <div className="content">
        <div className="content_img">
          <img src={blog.image} alt="" />
          <div className="user_1">
            <img src={blog.author_image} alt="" />
          </div>
        </div>

        <div className="user">
          {/* <img src={blog.author_image} alt="" /> */}
          <div className="user_desc">
            <h5>{blog.author}</h5>
            <span>{blog.date}</span>
          </div>
          {/* <div className="edit">
            <Link className="link" to={`write/${demo.id}`}>
              <i class="fa-solid fa-pen"></i>
            </Link>
            <Link className="link trash">
              <i class="fa-sharp fa-solid fa-trash"></i>
            </Link>
          </div> */}
        </div>
        <div className="body_section">
          <h1>{blog.title}</h1>
          <span>{blog.content}</span>
        </div>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
}

export default Single;
