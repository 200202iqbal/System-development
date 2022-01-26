<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Item;

class ItemController extends Controller
{
    public function index()
    {
        $items = Item::get();
        // dd($items);
        $data = ["items" =>  $items];
        return view("admin.item.index", $data);
    }

    public function create()
    {
        return view("admin.item.create");
    }
    public function add(Request $request)
    {
        $posts = $request->all();
        // dd($post);
        //Insert
        Item::create($posts);
        return redirect()->route("admin.item.index");
    }

    public function edit(Request $request,$id)
    {
        $item = Item::find($id);
        $data = ["item"=>$item];
        return view("admin.item.edit",$data);
    }

    public function update(Request $request,$id)
    {
        $post=$request->all();
        Item::find($id)->update($post);
        return redirect()->route("admin.item.index");
    }
}
