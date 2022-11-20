import "./TweetList.css";

export default function TweetList({searchText}) {
    console.log(searchText);
    return (
        <div>
            {searchText.map((item, index) => {
                return (
                    <div className="display-tweet text-justify" key={index}> 
                        {item.full_text} 
                    </div>
                )
            })}
        </div>
    )
}