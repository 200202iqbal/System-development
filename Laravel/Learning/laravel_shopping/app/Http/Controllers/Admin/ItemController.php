<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Item;

class ItemController extends Controller
{
    public function index()
    {
        return view("admin.item.index");
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
}
