import WikiSearchBar from "components/wikiList/WikiSearchBar";
import WikiSearchList from "components/wikiList/WikiSearchList";


export default function wikiList () {
  return (
    <>
      <div className="mx-auto max-[54rem] py-16 lg:max-w-7xl lg:px-8 ">
        <WikiSearchBar></WikiSearchBar>
        <WikiSearchList></WikiSearchList>
      </div>

    </>
  )
}