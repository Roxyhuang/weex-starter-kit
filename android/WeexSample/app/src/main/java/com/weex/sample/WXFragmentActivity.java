package com.weex.sample;

import android.app.FragmentTransaction;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;

public class WXFragmentActivity extends AppCompatActivity {

  private static final String EXAMPLE_URL="http://192.168.0.100:8080/dist/home.weex.js";
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    if (getSupportActionBar() != null){
      getSupportActionBar().hide();
    }
    setContentView(R.layout.activity_fragment);
    Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
    setSupportActionBar(toolbar);

    WeexFragment weexFragment = WeexFragment.newInstance(EXAMPLE_URL);
    FragmentTransaction transaction = getFragmentManager().beginTransaction();
    transaction.add(R.id.content_fragment, weexFragment);
    transaction.commit();
  }
}
