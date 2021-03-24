const myEmojis = ["👨‍💻", "🏍️", "🔥"];

function renderEmojis() {
	const emojiContainer = document.querySelector("#emoji-container");
	emojiContainer.innerHTML = "";
	for (let i = 0; i < myEmojis.length; i++) {
		let emoji = document.createElement("span");
		emoji.textContent = myEmojis[i];
		emojiContainer.append(emoji);
	}
}

renderEmojis();

const pushBtn = document.querySelector("#push-btn");

pushBtn.addEventListener("click", function () {
	const emojiInput = document.querySelector("#emoji-input");

	if (emojiInput.value != "") {
		myEmojis.push(emojiInput.value);
		emojiInput.value = "";

		renderEmojis();
	}
});

const unshiftBtn = document.querySelector("#unshift-btn");

unshiftBtn.addEventListener("click", function () {
	const emojiInput = document.querySelector("#emoji-input");

	if (emojiInput.value != "") {
		myEmojis.unshift(emojiInput.value);
		emojiInput.value = "";

		renderEmojis();
	}
});

const shiftBtn = document.querySelector("#shift-btn");

shiftBtn.addEventListener("click", function () {
	myEmojis.shift();
	renderEmojis();
});

const popBtn = document.querySelector("#pop-btn");

popBtn.addEventListener("click", function () {
	myEmojis.pop();
	renderEmojis();
});
