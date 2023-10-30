export default (
    <frame>
        <vertical>
            <horizontal>
                <card
                    id="mode1Card"
                    cardBackgroundColor={selectedMode === 1 ? color : "#FFFFFF"}
                    cardElevation="2dp"
                    margin="8dp"
                    padding="16dp"
                    width="150dp"
                    height="60dp"
                >
                    <text
                        id="mode1Text"
                        text="模式一"
                        textColor={selectedMode === 1 ? "#FFFFFF" : "#000000"}
                        textSize="32sp"
                    />
                </card>
                <card
                    id="mode2Card"
                    cardBackgroundColor={selectedMode === 2 ? color : "#FFFFFF"}
                    cardElevation="2dp"
                    margin="8dp"
                    padding="16dp"
                    width="150dp"
                    height="60dp"
                >
                    <text
                        id="mode2Text"
                        text="模式二"
                        textColor={selectedMode === 2 ? "#FFFFFF" : "#000000"}
                        textSize="32sp"
                    />
                </card>
            </horizontal>
            <horizontal>
                <card
                    id="mode3Card"
                    cardBackgroundColor={selectedMode === 3 ? color : "#FFFFFF"}
                    cardElevation="2dp"
                    margin="8dp"
                    padding="16dp"
                    width="150dp"
                    height="60dp"
                >
                    <text
                        id="mode3Text"
                        text="模式三"
                        textColor={selectedMode === 3 ? "#FFFFFF" : "#000000"}
                        textSize="32sp"
                    />
                </card>
                <card
                    id="mode4Card"
                    cardBackgroundColor={selectedMode === 4 ? color : "#FFFFFF"}
                    cardElevation="2dp"
                    margin="8dp"
                    padding="16dp"
                    width="150dp"
                    height="60dp"
                >
                    <text
                        id="mode4Text"
                        text="模式四"
                        textColor={selectedMode === 4 ? "#FFFFFF" : "#000000"}
                        textSize="32sp"
                    />
                </card>
            </horizontal>
        </vertical>
    </frame>
);