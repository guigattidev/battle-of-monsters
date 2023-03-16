import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { Monster } from "../../models/interfaces/monster.interface"
import { setSelectedMonster, setComputerMonster } from "../../reducers/monsters/monsters.actions"
import { Image, ListTitle, MonsterCard, MonsterName, MonstersSection } from "./MonstersList.styled"

type MonstersListProps = {
    monsters: Monster[]
}

const MonstersList: React.FC<MonstersListProps> = ({ monsters }) => {
    const dispatch = useAppDispatch();

    const [selectedMonsterId, setSelectedMonsterId] = useState<string | null>(null);
    const [computerMonsterId, setComputerMonsterId] = useState<string | null>(null);

    const handleMonsterClick = (monster: Monster) => {
        const value = selectedMonsterId === monster.id ? null : monster.id;
        
        setSelectedMonsterId(value);
        dispatch(setSelectedMonster(!value ? null : monster));
        handleComputerMonster(value);
    }


    const handleComputerMonster = (value: string | null) => {
        let computer = null;

        if (value) {
            const filtered = monsters.filter(monster => monster.id !== value);
            const random = Math.floor(Math.random() * 4);

            computer = filtered[random].id;

            dispatch(setComputerMonster(filtered[random]));
        } else {
            dispatch(setComputerMonster(null));
        }

        setComputerMonsterId(computer);
    }

    return (
        <div>
            <ListTitle>{monsters.length > 0 ? 'Select your monster': 'No monsters available'}</ListTitle>

            <MonstersSection data-testid="monsters-list-section">
                {monsters.map(monster => (
                    <MonsterCard key={monster.id} onClick={() => handleMonsterClick(monster)} selected={monster.id === selectedMonsterId || monster.id === computerMonsterId} data-testid={monster.id}>
                        <Image src={monster.imageUrl} />
                        <MonsterName>
                            {monster.name}
                        </MonsterName>
                    </MonsterCard>
                ))}
            </MonstersSection>
        </div>
    )
}

export { MonstersList }