import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../app/hooks"
import { MonsterBattleCard } from "../../components/monster-battle-card/MonsterBattleCard"
import { MonstersList } from "../../components/monsters-list/MonstersList"
import { Title } from "../../components/title/Title"
import { WinnerDisplay } from "../../components/winner-display/WinnerDisplay"
import { fetchMonstersData, fetchBattleData } from "../../reducers/monsters/monsters.actions"
import { selectMonsters, selectBattle, selectSelectedMonster, selectComputerMonster } from "../../reducers/monsters/monsters.selectors"
import { BattleSection, PageContainer, StartBattleButton } from "./BattleOfMonsters.styled"
import { Battle } from '../../models/interfaces/monster.interface';

const BattleOfMonsters = () => {
    const dispatch = useAppDispatch()

    const monsters = useSelector(selectMonsters)
    const battle = useSelector(selectBattle)
    const selectedMonster = useSelector(selectSelectedMonster)
    const computerMonster = useSelector(selectComputerMonster)

    useEffect(() => {
        dispatch(fetchMonstersData())
    }, []);
    
    const handleStartBattleClick = () => {
        // Fight!        
        const data = {
            monster1Id: selectedMonster?.id,
            monster2Id: computerMonster?.id
        };

        dispatch(fetchBattleData(data))
    }

    return (
        <PageContainer>
            <Title>Battle of Monsters</Title>

            <MonstersList monsters={monsters} />

            {battle && <WinnerDisplay text={battle?.winner?.name}/> }

            <BattleSection>
                <MonsterBattleCard title={selectedMonster?.name || "Player"} monster={selectedMonster}></MonsterBattleCard>
                <StartBattleButton data-testid="start-battle-button"  disabled={selectedMonster === null} onClick={handleStartBattleClick}>Start Battle</StartBattleButton>
                <MonsterBattleCard title={computerMonster?.name || "Computer"} monster={computerMonster}></MonsterBattleCard>
            </BattleSection>
        </PageContainer>
    )
}

export { BattleOfMonsters }