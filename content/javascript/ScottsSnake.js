Elm.ScottsSnake = Elm.ScottsSnake || {};
Elm.ScottsSnake.make = function (_elm) {
   "use strict";
   _elm.ScottsSnake = _elm.ScottsSnake || {};
   if (_elm.ScottsSnake.values)
   return _elm.ScottsSnake.values;
   var _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _E = _N.Error.make(_elm),
   _J = _N.JavaScript.make(_elm),
   $moduleName = "ScottsSnake";
   var Basics = Elm.Basics.make(_elm);
   var Color = Elm.Color.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var Keyboard = Elm.Keyboard.make(_elm);
   var List = Elm.List.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Native = Native || {};
   Native.Ports = Elm.Native.Ports.make(_elm);
   var Random = Elm.Random.make(_elm);
   var Set = Elm.Set.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var String = Elm.String.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Time = Elm.Time.make(_elm);
   var _op = {};
   var drawCell = F2(function (color,
   cell) {
      return Graphics.Collage.move({ctor: "_Tuple2"
                                   ,_0: -92
                                   ,_1: 0})(Graphics.Collage.move({ctor: "_Tuple2"
                                                                  ,_0: Basics.toFloat(cell.x) * 10
                                                                  ,_1: Basics.toFloat(cell.y) * 10})(Graphics.Collage.filled(color)(A2(Graphics.Collage.rect,
      10,
      10))));
   });
   var cutTheLast = function (l) {
      return A2(List.take,
      List.length(l) - 1,
      l);
   };
   var pickCell = F2(function (i,
   l) {
      return List.head(A2(List.drop,
      A2(Basics.mod,i,List.length(l)),
      l));
   });
   var cartesianProduct = F2(function (l1,
   l2) {
      return function () {
         var allYs = List.concat(A2(List.repeat,
         List.length(l1),
         l2));
         var allXs = List.concat(A2(List.map,
         List.repeat(List.length(l2)),
         l1));
         return A2(List.zip,allXs,allYs);
      }();
   });
   var freeCells = F2(function (board,
   snake) {
      return function () {
         var snakeCells = Set.fromList(A2(List.map,
         function (c) {
            return {ctor: "_Tuple2"
                   ,_0: c.x
                   ,_1: c.y};
         },
         snake.cells));
         var boardCells = Set.fromList(A2(cartesianProduct,
         _L.range(1,board.w - 2),
         _L.range(1,board.h - 2)));
         return A2(List.map,
         function (_v0) {
            return function () {
               switch (_v0.ctor)
               {case "_Tuple2": return {_: {}
                                       ,x: _v0._0
                                       ,y: _v0._1};}
               _E.Case($moduleName,
               "on line 46, column 24 to 33");
            }();
         },
         Set.toList(A2(Set.diff,
         boardCells,
         snakeCells)));
      }();
   });
   var sameCell = F2(function (c,
   d) {
      return _U.eq(c.x,
      d.x) && _U.eq(c.y,d.y);
   });
   var containsCell = F2(function (c,
   cells) {
      return _U.cmp(List.length(A2(List.filter,
      function (cell) {
         return A2(sameCell,c,cell);
      },
      cells)),
      1) > -1;
   });
   var makeBoard = F2(function (w,
   h) {
      return {_: {}
             ,h: h
             ,w: w
             ,wall: List.concat(_J.toList([A2(List.map,
                                          function (s) {
                                             return {_: {},x: 0,y: s};
                                          },
                                          _L.range(0,h - 1))
                                          ,A2(List.map,
                                          function (s) {
                                             return {_: {},x: w - 1,y: s};
                                          },
                                          _L.range(0,h - 1))
                                          ,A2(List.map,
                                          function (s) {
                                             return {_: {},x: s,y: 0};
                                          },
                                          _L.range(0,w - 1))
                                          ,A2(List.map,
                                          function (s) {
                                             return {_: {},x: s,y: h - 1};
                                          },
                                          _L.range(0,w - 1))]))};
   });
   var difficulty = 7;
   var renderInterval = 550 - 50 * difficulty;
   var startApple = {_: {}
                    ,x: 4
                    ,y: 6};
   var board = A2(makeBoard,20,20);
   var drawCells = F2(function (snakeCells,
   apple) {
      return A3(Graphics.Collage.collage,
      400,
      400,
      List.concat(_J.toList([A2(List.map,
                            drawCell(Color.red),
                            _J.toList([apple]))
                            ,A2(List.map,
                            drawCell(Color.green),
                            snakeCells)
                            ,A2(List.map,
                            drawCell(Color.black),
                            board.wall)])));
   });
   var GameOver = function (a) {
      return {ctor: "GameOver"
             ,_0: a};
   };
   var GameOn = F2(function (a,b) {
      return {ctor: "GameOn"
             ,_0: a
             ,_1: b};
   });
   var render = function (state) {
      return function () {
         switch (state.ctor)
         {case "GameOn":
            return A2(drawCells,
              state._0.cells,
              state._1);
            case "GameOver":
            return Text.asText(_L.append("GameOver. Snake Length: ",
              String.show(state._0)));}
         _E.Case($moduleName,
         "between lines 137 and 140");
      }();
   };
   var Right = {ctor: "Right"};
   var Left = {ctor: "Left"};
   var Down = {ctor: "Down"};
   var Up = {ctor: "Up"};
   var startDirection = Up;
   var startSnake = {_: {}
                    ,cells: _J.toList([{_: {}
                                       ,x: 4
                                       ,y: 3}])
                    ,direction: startDirection};
   var adjacentCell = F2(function (cell,
   direction) {
      return function () {
         switch (direction.ctor)
         {case "Down": return {_: {}
                              ,x: cell.x
                              ,y: cell.y - 1};
            case "Left": return {_: {}
                                ,x: cell.x - 1
                                ,y: cell.y};
            case "Right": return {_: {}
                                 ,x: cell.x + 1
                                 ,y: cell.y};
            case "Up": return {_: {}
                              ,x: cell.x
                              ,y: cell.y + 1};}
         _E.Case($moduleName,
         "between lines 56 and 60");
      }();
   });
   var nextState = F3(function (board,
   _v9,
   gameState) {
      return function () {
         switch (_v9.ctor)
         {case "_Tuple2":
            return function () {
                 switch (gameState.ctor)
                 {case "GameOn":
                    return function () {
                         var nextHead = A2(adjacentCell,
                         List.head(gameState._0.cells),
                         _v9._0);
                         return A2(containsCell,
                         nextHead,
                         board.wall) ? GameOver(List.length(gameState._0.cells)) : A2(containsCell,
                         nextHead,
                         List.tail(gameState._0.cells)) ? GameOver(List.length(gameState._0.cells)) : Basics.not(A2(sameCell,
                         nextHead,
                         gameState._1)) ? A2(GameOn,
                         _U.replace([["cells"
                                     ,{ctor: "::"
                                      ,_0: nextHead
                                      ,_1: cutTheLast(gameState._0.cells)}]],
                         gameState._0),
                         gameState._1) : A2(GameOn,
                         _U.replace([["cells"
                                     ,{ctor: "::"
                                      ,_0: nextHead
                                      ,_1: gameState._0.cells}]],
                         gameState._0),
                         A2(pickCell,
                         _v9._1,
                         A2(freeCells,
                         board,
                         gameState._0)));
                      }();
                    case "GameOver":
                    return gameState;}
                 _E.Case($moduleName,
                 "between lines 69 and 79");
              }();}
         _E.Case($moduleName,
         "between lines 69 and 79");
      }();
   });
   var directionFromArrows = F2(function (arrows,
   direction) {
      return _U.cmp(arrows.x,
      0) < 0 ? Left : _U.cmp(arrows.x,
      0) > 0 ? Right : _U.cmp(arrows.y,
      0) > 0 ? Up : _U.cmp(arrows.y,
      0) < 0 ? Down : direction;
   });
   var requestedDirectionSignal = A3(Signal.foldp,
   directionFromArrows,
   startDirection,
   Keyboard.arrows);
   var flipDirection = function (direction) {
      return function () {
         switch (direction.ctor)
         {case "Down": return Up;
            case "Left": return Right;
            case "Right": return Left;
            case "Up": return Down;}
         _E.Case($moduleName,
         "between lines 93 and 97");
      }();
   };
   var noBackwards = F2(function ($new,
   old) {
      return _U.eq($new,
      flipDirection(old)) ? old : $new;
   });
   var timedDirectionSignal = A3(Signal.foldp,
   noBackwards,
   startDirection,
   A2(Signal.sampleOn,
   Time.every(renderInterval),
   requestedDirectionSignal));
   var randomSignal = A3(Random.range,
   0,
   board.w * board.h,
   timedDirectionSignal);
   var wrappedSignal = A3(Signal.lift2,
   F2(function (dir,rand) {
      return {ctor: "_Tuple2"
             ,_0: dir
             ,_1: rand};
   }),
   timedDirectionSignal,
   randomSignal);
   var gameStateSignal = A3(Signal.foldp,
   nextState(board),
   A2(GameOn,
   startSnake,
   startApple),
   wrappedSignal);
   var main = A2(Signal.lift,
   render,
   gameStateSignal);
   var Snake = F2(function (a,b) {
      return {_: {}
             ,cells: a
             ,direction: b};
   });
   var Board = F3(function (a,
   b,
   c) {
      return {_: {}
             ,h: b
             ,w: a
             ,wall: c};
   });
   var Position = F2(function (a,
   b) {
      return {_: {},x: a,y: b};
   });
   _elm.ScottsSnake.values = {_op: _op
                             ,board: board
                             ,startApple: startApple
                             ,startDirection: startDirection
                             ,startSnake: startSnake
                             ,difficulty: difficulty
                             ,renderInterval: renderInterval
                             ,makeBoard: makeBoard
                             ,sameCell: sameCell
                             ,cartesianProduct: cartesianProduct
                             ,freeCells: freeCells
                             ,pickCell: pickCell
                             ,containsCell: containsCell
                             ,adjacentCell: adjacentCell
                             ,cutTheLast: cutTheLast
                             ,nextState: nextState
                             ,directionFromArrows: directionFromArrows
                             ,flipDirection: flipDirection
                             ,noBackwards: noBackwards
                             ,main: main
                             ,gameStateSignal: gameStateSignal
                             ,wrappedSignal: wrappedSignal
                             ,randomSignal: randomSignal
                             ,timedDirectionSignal: timedDirectionSignal
                             ,requestedDirectionSignal: requestedDirectionSignal
                             ,drawCell: drawCell
                             ,drawCells: drawCells
                             ,render: render
                             ,Up: Up
                             ,Down: Down
                             ,Left: Left
                             ,Right: Right
                             ,GameOn: GameOn
                             ,GameOver: GameOver
                             ,Position: Position
                             ,Board: Board
                             ,Snake: Snake};
   return _elm.ScottsSnake.values;
};