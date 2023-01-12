import dynamic from "next/dynamic";
import ArdModal from "../../src/components/desktop/examples/modal"
import ArdTabs from "../../src/components/desktop/examples/tabbing"
import ArdTableSort from "../../src/components/desktop/examples/table_sort"
import TypeAndSearch from "../../src/components/desktop/examples/TypeAndSearch ";
import CopyFromHTMLClass from "../../src/components/desktop/examples/CopyFromHTMLClass";
import ArAccordion from "../../src/components/desktop/examples/ArAccordion";
import TableFilter from "../../src/components/desktop/examples/TableFilter";
import LazyImage from "../../src/helper/image.helper";

const Example1 = ({ pageData }) => {
    const userData=JSON.parse('[ { "id": 1, "name": "kuldeep", "age": 12, "country": "India" }, { "id": 2, "name": "Ram", "age": 32, "country": "USA" }, { "id": 4, "name": "John", "age": 22, "country": "London" } ]')
  return (
      <>
        {/* <DesktopLayout
            data={pageData}
            mainComponent={HomeDesktop}
            pageType="home"
        /> */}

          <div>
              <ArdModal/>
              <ArdTabs/>
              <ArdTableSort data={userData}/>
              <TypeAndSearch />
              <CopyFromHTMLClass className="copyarea"></CopyFromHTMLClass>

              <ArAccordion title="hello world 1">This is the content of the component.</ArAccordion>

              <TableFilter data={userData}/>
              <div>
                  What is Lorem Ipsum?
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                  Why do we use it?
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                  Why do we use it?
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </div>
              <LazyImage
                  src="/next.svg"
                  alt="A lazy-loaded image"
                  width={300}
                  height={200}
                  className="my-image"
                  style={{ border: '1px solid #ccc',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      background:"#ccc",
                  }}
              />
          </div>

      </>
  )
}

export default Example1;
