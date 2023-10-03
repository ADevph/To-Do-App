<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;

class TodoController extends Controller
{
    public function index()
    {
        // $todos = Todo::all();
        // return response()->json($todos);
        return response()->json(Todo::latest()->get());

    }

    public function store(Request $request)
    {
        // $request->validate([
        //     'title' => 'required|string|max:255',
        // ]);

        // $todo = 
        Todo::create([
            'title' => $request->input('title'),
            'description' => $request->input('description', ''),
            // 'completed' => $request->input('completed', false),
        ]);
        return response()->json('successfully created');
        // return response()->json($todo, 201);
    }

    public function update(Request $request, $id)
    {

        $todo = Todo::whereId($id)->first();

        $todo->update([
            'title'=>$request->title,
            'description'=>$request->description,
        ]);
        return response()->json('success');
        // $todo = Todo::whereId($id)->first();

        // $todo = Todo::find($id);

        // if (!$todo) {
        //     return response()->json(['message' => 'Todo not found'], 404);
        // }

        // $todo->update([
        //     'title' => $request->input('title', $todo->title),
        //     'description' => $request->input('description', $todo->description),
        //     // 'completed' => $request->input('completed', $todo->completed),
        // ]);

        // return response()->json($todo);
    }


      /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return response()->json(Todo::whereId($id)->first());
    }




    public function destroy($id)
    {
        // $todo = Todo::find($id);

        // if (!$todo) {
        //     return response()->json(['message' => 'Todo not found'], 404);
        // }

        // $todo->delete();

        // return response()->json(['message' => 'Todo deleted']);


        Todo::whereId($id)->first()->delete();

        return response()->json('success');
    }
}
