import React,{useEffect} from "react";
import "./MaterialNavBar.css";
import { Link } from "react-router-dom";
export const MaterialNavBar = ({ link }) => {

  useEffect(() => {
    const dropdownLink = document.querySelector('li.dropdownLink');
    dropdownLink.addEventListener('click',(e)=>{
      e.preventDefault();
      dropdownLink.lastElementChild.classList.toggle('active')
    })

    return () => {
      dropdownLink.removeEventListener('click',()=>{})
    };
  }, [])

  return (
    <>
      <nav className="MaterialNavBar">
        <ul>
          {Object.keys(link).map((val, index) => {
            return (
              <li key={index}
                className={
                  index === 0
                    ? "logo"
                    : index === 1
                    ? "active"
                    : "child" in link[val]
                    ? "dropdownLink"
                    : null
                }
              >
                <Link to={"/"}>{val}</Link>
                {"child" in link[val] ? (
                  <div className="dropdown">
                    {Object.keys(link[val].child).map((val, index) => {
                      return <Link key={index}> {val} </Link>;
                    })}
                  </div>
                ) : null}
              </li>
            );
          })}
          <form action="">
            <input type="text" name="search" placeholder="Search" />
          </form>
          <li className="menu"> &#x2630;</li>
        </ul>
      </nav>
    </>
  );
};
