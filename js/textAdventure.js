/**
 * Created by TaberStorm on 7/18/2015.
 */
var app = angular.module('MyApp', []);
app.controller('MyController', ['$scope', function ($scope) {
    $scope.easyBattle = function () {
        $scope.dialog = "You approach a wolf, this should be an easy prey.";
        $scope.battleDone = false;
        monster = $scope.enemy.wolf;
        $scope.enemyHp = monster.hp;
    };
    $scope.medBattle = function () {
        $scope.dialog = "An Orc, this might provide a challenge.";
        $scope.battleDone = false;
        monster = $scope.enemy.orc;
        $scope.enemyHp = monster.hp;
        battleType = "med";
    };
    $scope.hardBattle = function () {
        $scope.dialog = "Beware a mighty dragon approaches";
        $scope.battleDone = false;
        monster = $scope.enemy.dragon;
        $scope.enemyHp = monster.hp;
        battleType = "hard";
    };
    $scope.store = function () {
        alert("This is the store.");
    };
    $scope.rest = function () {
        $scope.dialog = $scope.inn[randInn()];
        $scope.char.hp = 10 * $scope.char.con;
        $scope.char.mp = 10 * $scope.char.min;
        $scope.char.ep = 10 * $scope.char.end;
    };
    $scope.char = {
        str: '',
        dex: '',
        spd: '',
        con: '',
        end: '',
        min: '',
        sol: '',
        hp: '',
        mp: '',
        ep: ''
    };
    $scope.char.str = '';
    $scope.char.con = '';
    $scope.char.sol = '';
    $scope.statsCheck = false;
    $scope.itemCheck = false;
    $scope.battleDone = true;
    var battleType;
    $scope.dialog = "";
    $scope.enemy = {
        wolf: {hp: 5, atk: 1, dex: 2, spd: 3},
        turtle: {hp: 10, atk: 2, dex: 1, spd: 1},
        elf: {hp: 5, atk: 3, dex: 3, spd: 3},
        orc: {hp: 10, atk: 2, dex: 2, spd: 2},
        dragon: {hp: 2000, atk: 1000, dex: 40, spd: 40},
        demigod: {hp: 500, atk: 500, dex: 500, spd: 500}
    };
    $scope.enemyHp = 0;
    var monster;
    $scope.inn = [
        "You approach the bar and an elf greets you. 'What do you need dear friend.' You collapse to the floor exhausted. The elf carries to a room, kisses you on the forehead, and gives you a free stay.",
        "On the way to town you get jumped by a bunch of Gnomes... The best rest you have ever had",
        "In this bar you collapse under exhaustion after out drinking 'Golden Beard' Dwarven drinking champion! You some how wake up three days later refreshed.",
        "An odd temple lends you rest in exchange for your soul, what the hell why not.",
        "You are approached by a beautiful orcish lady. She then yells 'LIGHTS OUT!' The last thing you remember was a fist hitting you face. I guess she was hitting on you.",
        "This is a nice Inn, with a nice bed.",
        "Oh Romeo, oh Romeo. Wherefore art thou Romeo. That's all you recall of the play, must of slept through it.",
        "Not sure whos bed your in or who is the person sleeping next to you, but your cloths are close by... better run.",
        "This Dwarven all female bar is hardcore everyone has a beard except for you.",
        "You relax out in the stars.",
        "An old friend lends you a stay at their home."
    ]
    $scope.attackWep = function () {
        var yIni = roll() + $scope.char.spd;
        var mIni = roll() + monster.spd;
        if ($scope.char.hp <= 0) {
            $scope.dialog = "You fall to the ground and pass out.";
            $scope.battleDone = true;
            return;
        }
        if (yIni >= mIni) {
            if ($scope.char.ep > 0) {
                $scope.char.ep -= 2;
                $scope.yBattle = "You win the initiative. You swing with you weapon at hand.";
                monster.hp -= $scope.char.str;
                if (monster.hp > 0) {
                    $scope.mBattle = "The enemy attacks back in kind";
                    $scope.char.hp -= monster.atk;
                    if ($scope.char.hp <= 0) {
                        $scope.dialog = "You fall to the ground and pass out.";
                        $scope.battleDone = true;
                        return;
                    }
                }
                else {
                    $scope.dialog = "You fell the beast! Claim you reward!";
                    $scope.battleDone = true;
                    if (battleType == "easy") {
                        $scope.eReward = true;
                    }
                    else if (battleType == "med") {
                        $scope.mReward = true;
                    }
                    else {
                        $scope.hReward = true;
                    }
                }
            }
            else {
                $scope.yBattle = "You are too exhausted to attack.";
                if (monster.hp > 0) {
                    $scope.mBattle = "The enemy attacks with an awesome blow!";
                    $scope.char.hp -= monster.atk;
                    if ($scope.char.hp <= 0) {
                        $scope.dialog = "You fall to the ground and pass out.";
                        $scope.battleDone = true;
                        return;
                    }
                }
                else {
                    $scope.dialog = "You fell the beast! Claim you reward!";
                    $scope.battleDone = true;
                    if (battleType == "easy") {
                        $scope.eReward = true;
                    }
                    else if (battleType == "med") {
                        $scope.mReward = true;
                    }
                    else {
                        $scope.hReward = true;
                    }
                }
            }
        }
        else {
            $scope.yBattle = "The enemy strikes first and lands a painful blow!"
            $scope.char.hp -= monster.atk;
            if ($scope.char.hp <= 0) {
                $scope.dialog = "You fall to the ground and pass out.";
                $scope.battleDone = true;
                return;
            }
            if ($scope.char.ep > 0) {
                $scope.char.ep -= 2;
                $scope.mBattle = "You swing in retaliation!";
                monster.hp -= $scope.char.str;
                if (monster.hp <= 0) {
                    $scope.dialog = "You fell the beast! Claim you reward!";
                    $scope.battleDone = true;
                    if (battleType == "easy") {
                        $scope.eReward = true;
                    }
                    else if (battleType == "med") {
                        $scope.mReward = true;
                    }
                    else {
                        $scope.hReward = true;
                    }
                }
            }
        }
        $scope.enemyHp = monster.hp;
    };
    $scope.attackMag = function () {
        var yIni = roll() + $scope.char.spd;
        var mIni = roll() + monster.spd;
        if ($scope.char.hp <= 0) {
            $scope.dialog = "You fall to the ground and pass out.";
            $scope.battleDone = true;
            return;
        }
        if (yIni >= mIni) {
            if ($scope.char.mp > 0) {
                $scope.char.mp -= 2;
                $scope.yBattle = "You win the initiative. Fire blazes from you hands.";
                monster.hp -= $scope.char.sol;
                if (monster.hp > 0) {
                    $scope.mBattle = "The enemy attacks back in kind";
                    $scope.char.hp -= monster.atk;
                    if ($scope.char.hp <= 0) {
                        $scope.dialog = "You fall to the ground and pass out.";
                        $scope.battleDone = true;
                        return;
                    }
                }
                else {
                    $scope.dialog = "You fell the beast! Claim you reward!";
                    $scope.battleDone = true;
                    if (battleType == "easy") {
                        $scope.eReward = true;
                    }
                    else if (battleType == "med") {
                        $scope.eReward = true;
                    }
                    else {
                        $scope.eReward = true;
                    }
                }
            }
            else {
                $scope.yBattle = "You are too exhausted to attack.";
                if (monster.hp > 0) {
                    $scope.mBattle = "The enemy attacks with an awesome blow!";
                    $scope.char.hp -= monster.atk;
                    if ($scope.char.hp <= 0) {
                        $scope.dialog = "You fall to the ground and pass out.";
                        $scope.battleDone = true;
                        return;
                    }
                }
                else {
                    $scope.dialog = "You fell the beast! Claim you reward!";
                    $scope.battleDone = true;
                    if (battleType == "easy") {
                        $scope.eReward = true;
                    }
                    else if (battleType == "med") {
                        $scope.mReward = true;
                    }
                    else {
                        $scope.hReward = true;
                    }
                }
            }
        }
        else {
            $scope.yBattle = "The enemy strikes first and lands a painful blow!"
            $scope.char.hp -= monster.atk;
            if ($scope.char.hp <= 0) {
                $scope.dialog = "You fall to the ground and pass out.";
                $scope.battleDone = true;
                return;
            }
            if ($scope.char.mp > 0) {
                $scope.char.mp -= 2;
                $scope.mBattle = "You counter with a spell of your own.";
                monster.hp -= $scope.char.sol;
                if (monster.hp <= 0) {
                    $scope.dialog = "You fell the beast! Claim you reward!";
                    $scope.battleDone = true;
                    if (battleType == "easy") {
                        $scope.eReward = true;
                    }
                    else if (battleType == "med") {
                        $scope.eReward = true;
                    }
                    else {
                        $scope.eReward = true;
                    }
                }
            }
        }
        $scope.enemyHp = monster.hp;
    };
    $scope.retreat = function () {
        var yIni = roll() + $scope.char.spd;
        var mIni = roll() + monster.spd;
        if (yIni >= mIni) {
            $scope.dialog = "You have escaped successfully";
            $scope.battleDone = true
        }
        else {
            $scope.yBattle = "The enemy cuts of your retreat";
            $scope.mBattle = "It attacks viciously";
            $scope.char.hp -= monster.atk;
        }
    };
    $scope.eReward = false;
    $scope.mReward = false;
    $scope.hReward = false;
    function randInn() {
        return Math.floor((Math.random() * 10));
    };
    function roll() {
        return Math.floor((Math.random() * 10) + 1);
    };
}]);